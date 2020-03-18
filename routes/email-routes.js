require("dotenv").config();
const sendMail = require("../mail");

module.exports = function(app) {
  app.post("/contact", (req, res) => {
    const { email, subject, text } = req.body;
    console.log("Email Form:", req.body);
    sendMail(email, subject, text, function(err, data) {
      if (err) {
        res.status(500).json({ message: "Justin Error" });
      } else {
        res.json({ message: "Email Sent!" });
      }
    });
  });
};
