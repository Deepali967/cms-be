const faq = require("../model/faq.model");

function initilizeApp(app) {
  app.get("/api/faq", (req, res) => {
    faq.findAll(req, res);
  });

  app.get("/api/faq/:id", (req, res) => {
    faq.findAOne(req, res);
  });

  app.post("/api/faq", (req, res) => {
    faq.create(req, res);
  });

  app.put("/api/faq/:id", (req, res) => {
    faq.update(req, res);
  });

  app.delete("/api/faq/:id", (req, res) => {
    faq.delete(req, res);
  });
}

module.exports.initilizeApp = initilizeApp;
