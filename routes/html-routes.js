var path = require("path");

module.exports = function(app) {
  // Homepage
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //   Contact Page
  app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  // PhotographyPage
  // app.get("/photography", (req, res) => {
  //     res.sendFile(path.join(__dirname, "../public/photography.html"));
  // })
};
