const express = require("express");
const path = require("path");
const parser = require("body-parser");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

require("dotenv").config();

//rest server

const app = express();
const PORT = process.env.PORT || 1231;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public/dist")));

app.get(" * ", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/dist/index.html"));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(PORT, () => console.log(`Successfully connected to PORT: ${PORT}`));

//post resquest: receiving data through req.body
//nodemailer

app.post("/", (req, res, next) => {
  let data = req.body;

  const output = `
   <p>You have a new contact request</p>
   <h3>Contact Details</h3>
    <ul>
      <li>Name: ${data.name}</li>
      <li>Email: ${data.email}</li>
      <li>Phone: ${data.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
 
  `;

  console.log("req.body", req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: process.env.USER_NAME,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: '"Nodemailer Contact" <hjk013@gmail.com>',
    to: "hjk013@gmail.com",
    subject: "SOMEONE SENT MSG FROM YOUR PERSONAL WEBSITE",
    html: output
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(JSON.stringify(res));
      console.log("Message sent: %s", res.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(res));
      console.log("res", res);
      // res.end();
    }
  });

  res.end();
});
