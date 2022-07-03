const help = require("../model/help.model");

function initilizeApp(app) {
  app.get("/api/help", (req, res) => {
    help.findAll(req, res);
  });

  app.get("/api/help/:id", (req, res) => {
    help.findAOne(req, res);
  });

  app.post("/api/help", (req, res) => {
    help.create(req, res);
  });

  app.put("/api/help/:id", (req, res) => {
    help.update(req, res);
  });

  app.delete("/api/help/:id", (req, res) => {
    help.delete(req, res);
  });
}

module.exports.initilizeApp = initilizeApp;
