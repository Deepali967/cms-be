var imageModel = require("../schema/image.schema");

exports.createImage = function (image) {
  imageModel
    .create(image, (err, item))
    .then((data) => {
      console.log(data);
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.log(err);
    });
};
