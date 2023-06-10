const nodemailer = require("nodemailer");

module.exports = async (name, email, link) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: "thevet.123456@gmail.com",
        pass: "wmnuzdummdemkdmf",
      },
    });

    let message = `Dear ${name},
    
    Thank you for creating an account with TheVET. To ensure the security of your account and to activate all the features, we require you to verify your email address.
    
    Please follow the link below to complete the email verification process:
    ${link}
    
    If you did not create an account with TheVET, please disregard this email. Your account will remain inactive.
    
    If you have any questions or encounter any issues during the verification process, please don't hesitate to contact our support team at "thevet.123456@gmail.com".
    
    Thank you for choosing TheVET.
    
    Best regards,
    TheVET Team`;

    await transporter.sendMail({
      from: "thevet.123456@gmail.com",
      to: email,
      subject: "Account Verification - Action Required",
      text: message,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent!");
    console.error(error);
    return error;
  }
};
