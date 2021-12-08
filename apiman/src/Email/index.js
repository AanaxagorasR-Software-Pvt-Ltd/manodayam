const nodeMailer = require("nodemailer");
const emailHtml = require("./emailTemplate");
const path = require("path");
const env = require("../../config");

const sendEmail = (name, email) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: `${env.email}`,
      pass: `${env.password}`,
    },
  });
  let mailOptions = {
    from: `"Virtual Clinic Support Team " <${env.email}>`, // sender address
    to: `${email}`, // list of receivers
    subject: "New user || change password ", // Subject line
    attachments: [
      {
        filename: "logo.png",
        path: path.join(__dirname, "../../public/images/logo.png"),
        cid: "809Ruby90O", //same cid value as in the html img src
      },
    ],
    html: emailHtml(name, email), // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.render("index");
  });
};
module.exports = sendEmail;
