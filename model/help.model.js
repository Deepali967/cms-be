const db = require("../schema/help.schema");

exports.create = function (req, res) {
  db.find(req.body, {}).then((data) => {
    if (!data.length) {
      const helparticle = new db(req.body);

      helparticle
        .save()
        .then((data) => {
          res.status(200).json({ message: "success" });
        })
        .catch((err) => {
          res.json({ message: err._message });
        });
    } else {
      res.status(412).json({ message: "Already exists" });
    }
  });
};

exports.findAll = function (req, res) {
  db.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error" });
    });
};

exports.findAOne = function (req, res) {
  db.findOne({ _id: req.params.id }, {})
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error" });
    });
};

exports.update = function (req, res) {
  db.findByIdAndUpdate(req.params.id, req.body)
    .then((helparticle) => {
      if (!helparticle) {
        res
          .status(404)
          .json({ message: "Couldn't find course with requested ID" });
      }

      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error" });
    });
};

exports.delete = function (req, res) {
  db.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "Could not found any data with id" });
      }

      res.status(200).json({ message: "record deleted successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Error" });
    });
};
