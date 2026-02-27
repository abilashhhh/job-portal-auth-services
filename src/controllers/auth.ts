import getBuffer from "../utils/buffer.js";
import { sql } from "../utils/db.js";
import ErrorHandler from "../utils/errorHandler.js";
import { TryCatch } from "../utils/TryCatch.js";
import bcrypt from "bcrypt";
import axios from "axios";
import jwt from "jsonwebtoken";
import { forgotPasswordTemplate } from "../templates.js";
import { publishToTopic } from "../producer.js";

export const registerUser = TryCatch(async (req, res, next) => {
  const { name, email, password, phone_number, role, bio } = req.body;
  if (!name || !email || !password || !phone_number || !role)
    throw new ErrorHandler(400, "All fields are required");

  const existingUser =
    await sql`SELECT user_id FROM users WHERE email = ${email}`;
  if (existingUser.length > 0)
    throw new ErrorHandler(409, "User with this email already exists");

  const hashPassword = await bcrypt.hash(password, 10);

  let registeredUser;

  if (role === "recruiter") {
    const [user] =
      await sql`INSERT INTO users (name, email, password, phone_number, role) 
                                VALUES (${name}, ${email}, ${hashPassword}, ${phone_number}, ${role}) 
                                RETURNING user_id, name, email, phone_number, role, created_at`;
    registeredUser = user;
  } else if (role === "jobseeker") {
    const file = req.file;
    if (!file) {
      throw new ErrorHandler(400, "Resume is required for job seekers");
    }

    const fileBuffer = getBuffer(file);
    if (!fileBuffer || !fileBuffer.content) {
      throw new ErrorHandler(400, "Failed to generate buffer");
    }

    const { data } = await axios.post(
      `${process.env.UPLOAD_SERVICE_URL}/api/utils/upload`,
      {
        buffer: fileBuffer.content,
      },
    );

    const [user] =
      await sql`INSERT INTO users (name, email, password, phone_number, role, bio, resume, resume_public_id) 
                                VALUES (${name}, ${email}, ${hashPassword}, ${phone_number}, ${role}, ${bio}, ${data.url}, ${data.public_id}) 
                                RETURNING user_id, name, email, phone_number, role, bio, created_at`;
    registeredUser = user;
  }

  const token = jwt.sign(
    { id: registeredUser?.user_id },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" },
  );

  res.json({ message: "User registered successfully", registeredUser, token });
});

export const loginUser = TryCatch(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new ErrorHandler(400, "Email and password are required");

  const user = await sql`
  SELECT 
    u.user_id,
    u.name,
    u.email,
    u.password,
    u.phone_number,
    u.role,
    u.bio,
    u.resume,
    u.profile_pic,
    u.subscription,
    ARRAY_AGG(s.name) FILTER (WHERE s.name IS NOT NULL) AS skills
  FROM users u
  LEFT JOIN user_skills us ON u.user_id = us.user_id
  LEFT JOIN skills s ON us.skill_id = s.skill_id
  WHERE u.email = ${email}
  GROUP BY u.user_id;
`;

  if (user.length === 0) throw new ErrorHandler(400, "Invalid credentials");

  const userObject = user[0];
  if (!userObject.password || typeof userObject.password !== "string") {
    throw new ErrorHandler(400, "Invalid credentials");
  }

  const matchPassword = await bcrypt.compare(
    String(password),
    userObject.password,
  );
  if (!matchPassword) throw new ErrorHandler(400, "Invalid credentials");

  userObject.skills = userObject.skills || [];
  delete userObject.password;

  const token = jwt.sign(
    { id: userObject?.user_id },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" },
  );

  res.json({ message: "User logged in successfully", userObject, token });
});

export const forgotPassword = TryCatch(async (req, res, next) => {
  const { email } = req.body;
  if (!email) throw new ErrorHandler(400, "Email is required");

  const users =
    await sql`SELECT user_id, email, name FROM users WHERE email = ${email}`;

  if (users.length === 0) {
    return res.json({
      message:
        "If an account with that email exists, a password reset link has been sent",
    });
  }

  const user = users[0];

  const resetToken = jwt.sign(
    { email: user.email, type: "reset" },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" },
  );

  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const message = {
    to: email,
    subject: "Password Reset Request",
    html: forgotPasswordTemplate(resetLink),
  };

  publishToTopic("send-mail", message).catch((error) => {
    console.error(
      "Failed to publish password reset email to Kafka topic:",
      error,
    );
  });

  res.json({
    message:
      "If an account with that email exists, a password reset link has been sent",
  });
});
