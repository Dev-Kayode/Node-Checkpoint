const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourmail@gmail.com",
    pass: "password",
  },
});

let mailOptions = {
  from: "youremail@gmail.com",
  to: "youremail@gmail.com",
  subject: "Hello from Nodemailer",
  text: "Hello world?",
  html: "<b>Hello world?</b>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
