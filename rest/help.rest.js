const help = require("../model/help.model");
let upload = require("../upload/upload");
let imageupload = require("../schema/image.schema");
let path = require("path");

const fs = require("fs");

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

  app.post(
    "/api/help/uploadimage",
    upload.single("image"),
    (req, res, next) => {
      var img = fs.readFileSync(req.file.path);
      var encode_img = img.toString("base64");

      var final_img = {
        contentType: req.file.mimetype,
        image: new Buffer(encode_img, "base64"),
      };

      imageupload.create(final_img, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(result, final_img);
          console.log(result.img.Buffer);
          console.log("Saved To database");
          res.send({ imageUrl: `data:image/png;base64,${encode_img}` });
        }
      });
    }
  );
}

module.exports.initilizeApp = initilizeApp;
