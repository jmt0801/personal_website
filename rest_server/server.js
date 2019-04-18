const express = require("express");
const path = require("path");
const parser = require("body-parser");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

//Gmail API
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLEINT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const app = express();
const PORT = process.env.PORT || 1231;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public/dist")));

app.get(" * ", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/dist/index.html"));
});

// app.use('/api', router);

app.listen(PORT, () => console.log(`Successfully connected to PORT: ${PORT}`));

//nodemailer

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: "hjk013@gmail.com",
      clinetId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN
    })
  }
});

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
