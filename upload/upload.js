const multer = require("multer");

let path = require("path");

console.log(path);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(path.join(__dirname, "/uploads/"));
    cb(null, path.join(__dirname, "/uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

module.exports = multer({ storage: storage });
