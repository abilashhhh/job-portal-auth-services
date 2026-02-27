export const forgotPasswordTemplate = (resetLink: string) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Reset Your Password</title>
    <!--[if mso]>
    <style type="text/css">
        table {border-collapse: collapse;}
        .responsive-table {width: 600px !important;}
    </style>
    <![endif]-->
    <style>
        @media only screen and (max-width: 640px) {
            .responsive-table {
                width: 100% !important;
                max-width: 100% !important;
            }
            .mobile-padding {
                padding: 24px 16px !important;
            }
            .mobile-header-padding {
                padding: 24px 16px !important;
            }
            .mobile-text {
                font-size: 14px !important;
            }
            .mobile-button {
                padding: 12px 24px !important;
                font-size: 13px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-padding {
                padding: 20px 12px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- Preview Text -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        Reset your Job Portal password — link expires in 15 minutes.
    </div>

    <!-- Preheader Spacer -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all;">
        &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>

    <!-- Main Container -->
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f3f4f6;">
        <tr>
            <td style="padding: 0;">

                <!-- Email Content Table -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="responsive-table" style="background-color: #ffffff; width: 100%; overflow: hidden;">

                    <!-- Header Section -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 45px 20px; text-align: center;" class="mobile-header-padding">

                            <!-- Lock Icon -->
                            <div style="margin-bottom: 16px;">
                                <div style="display: inline-block; width: 60px; height: 60px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; line-height: 60px;">
                                    <span style="font-size: 30px; color: #ffffff;">🔒</span>
                                </div>
                            </div>

                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; line-height: 1.3;">
                                Reset Your Password
                            </h1>
                            <p style="margin: 12px 0 0; color: #e0d7ff; font-size: 15px; font-weight: 400; opacity: 0.95;">
                                We received a request to reset your Job Portal password
                            </p>

                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                <tr>
                                    <td align="center" style="padding-top: 18px;">
                                        <div style="background-color: rgba(255, 255, 255, 0.15); border-radius: 4px; display: inline-block; padding: 8px 18px;">
                                            <p style="margin: 0; color: #ffffff; font-size: 13px; font-weight: 500;">
                                                ⏰ Link expires in 15 minutes
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 48px 40px;" class="mobile-padding">

                            <!-- Greeting -->
                            <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #111827;">
                                Hi there,
                            </p>

                            <!-- Main Message -->
                            <p style="margin: 0 0 28px; font-size: 16px; line-height: 1.7; color: #374151;">
                                We received a request to reset the password associated with your Job Portal account. Click the button below to create a new password and regain access to your account.
                            </p>

                            <!-- Info Alert Box -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #ede9fe; border-left: 4px solid #667eea; margin: 0 0 32px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <p style="margin: 0 0 8px; font-size: 15px; font-weight: 600; color: #3730a3;">
                                            🔐 Password Reset Requested
                                        </p>
                                        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #4338ca;">
                                            For your security, this link will only be valid for the next <strong>15 minutes</strong>. If you did not request this, you can safely ignore this email.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA Button -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 32px;">
                                <tr>
                                    <td align="center">
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                            <tr>
                                                <td align="center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px;">
                                                    <a href="${resetLink}" target="_blank" style="display: inline-block; padding: 14px 40px; color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none;" class="mobile-button">
                                                        Reset My Password
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Manual Link Section -->
                            <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 18px;">
                                <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">
                                    Can't click the button?
                                </h2>
                            </div>

                            <p style="margin: 0 0 12px; font-size: 14px; line-height: 1.6; color: #4b5563;">
                                Copy and paste the link below into your browser:
                            </p>

                            <!-- Link Box -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 1px solid #d1d5db; margin-bottom: 32px;">
                                <tr>
                                    <td style="padding: 14px 18px; font-size: 13px; color: #667eea; background-color: #f9fafb; word-break: break-all; border-left: 4px solid #667eea;">
                                        <a href="${resetLink}" style="color: #667eea; text-decoration: none;">${resetLink}</a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Security Details Section -->
                            <div style="border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-bottom: 18px;">
                                <h2 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">
                                    Security Information
                                </h2>
                            </div>

                            <!-- Security Steps Table -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border: 1px solid #d1d5db; margin-bottom: 32px;">
                                <tbody>
                                    <tr>
                                        <td style="padding: 14px 18px; font-size: 14px; color: #1f2937; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding-right: 12px; vertical-align: top;">
                                                        <span style="display: inline-block; width: 22px; height: 22px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; text-align: center; line-height: 22px; color: #ffffff; font-size: 11px; font-weight: 600;">1</span>
                                                    </td>
                                                    <td style="vertical-align: top;">
                                                        <strong>Verify:</strong> Confirm it was you who requested this reset. If not, contact support immediately.
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 14px 18px; font-size: 14px; color: #1f2937; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding-right: 12px; vertical-align: top;">
                                                        <span style="display: inline-block; width: 22px; height: 22px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; text-align: center; line-height: 22px; color: #ffffff; font-size: 11px; font-weight: 600;">2</span>
                                                    </td>
                                                    <td style="vertical-align: top;">
                                                        <strong>Reset:</strong> Click the button above or use the link to create a strong new password.
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 14px 18px; font-size: 14px; color: #1f2937; background-color: #ffffff;">
                                            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                                                <tr>
                                                    <td style="padding-right: 12px; vertical-align: top;">
                                                        <span style="display: inline-block; width: 22px; height: 22px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; text-align: center; line-height: 22px; color: #ffffff; font-size: 11px; font-weight: 600;">3</span>
                                                    </td>
                                                    <td style="vertical-align: top;">
                                                        <strong>Secure:</strong> Once reset, log back in and resume your job portal activity.
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Important Info Box -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #faf5ff; border-left: 3px solid #764ba2; margin-bottom: 28px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h3 style="margin: 0 0 14px; font-size: 15px; font-weight: 600; color: #1f2937;">
                                            Important Information
                                        </h3>
                                        <p style="margin: 0 0 12px; font-size: 14px; color: #5b21b6; line-height: 1.6;">
                                            <strong>Link Expiry:</strong> This reset link will expire in <strong>15 minutes</strong> for your security.
                                        </p>
                                        <p style="margin: 0; font-size: 14px; color: #5b21b6; line-height: 1.6;">
                                            <strong>One-time Use:</strong> This link can only be used once. Request a new one if it expires.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Additional Notes -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #fafafa; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 16px 18px;">
                                        <p style="margin: 0; font-size: 13px; line-height: 1.6; color: #4b5563;">
                                            <strong>Note:</strong> If you did not request a password reset, please ignore this email. Your account is safe and your password has not been changed. If you're concerned, contact our support team right away.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Support Contact -->
                            <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 28px;">
                                <p style="margin: 0 0 6px; font-size: 13px; line-height: 1.6; color: #6b7280;">
                                    Need help? Contact our support team at <a href="mailto:support@jobportal.com" style="color: #667eea; text-decoration: none; font-weight: 500;">support@jobportal.com</a> or call (800) 123-4567
                                </p>
                            </div>

                            <!-- Closing -->
                            <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.6; color: #4b5563;">
                                Stay safe and good luck with your job search!
                            </p>
                            <p style="margin: 14px 0 0; font-size: 14px; line-height: 1.6; color: #4b5563;">
                                <strong style="color: #1f2937;">The Job Portal Team</strong><br>
                                <span style="color: #6b7280; font-size: 13px;">Connecting Talent with Opportunity</span>
                            </p>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #fafafa; padding: 28px 40px; border-top: 1px solid #e5e7eb;" class="mobile-padding">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                <tr>
                                    <td align="center">
                                        <p style="margin: 0 0 10px; font-size: 12px; color: #6b7280; line-height: 1.6;">
                                            This is an automated security email from Job Portal.<br>
                                            Please do not reply to this email.
                                        </p>
                                        <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                                            © ${new Date().getFullYear()} Job Portal. All rights reserved.
                                        </p>
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top: 14px; padding-top: 14px; border-top: 1px solid #e5e7eb;">
                                            <tr>
                                                <td align="center">
                                                    <p style="margin: 0; font-size: 11px; color: #9ca3af; line-height: 1.6;">
                                                        <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 6px;">Privacy Policy</a> |
                                                        <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 6px;">Terms of Service</a> |
                                                        <a href="#" style="color: #6b7280; text-decoration: none; margin: 0 6px;">Unsubscribe</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>
`;
};
