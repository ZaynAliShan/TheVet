const nodemailer = require("nodemailer");

module.exports = async (email, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: "thevet.123456@gmail.com",
        pass: "wmnuzdummdemkdmf",
      },
    });

    await transporter.sendMail({
      from: "thevet.123456@gmail.com",
      to: email,
      subject: "TheVET Verification",
      text: text,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Email not sent!");
    console.error(error);
    return error;
  }
};
