const db = require('../schema/course.schema');

exports.create = function(req, res) {
  db.find({ name: req.body.name }, {}).then((data) => {
    if (!data.length) {
      const newCourse = new db({ name: req.body.name });
      newCourse
        .save()
        .then((data) => {
          res.status(200).json({ message: 'success' });
        })
        .catch((err) => {
          res.json({ message: 'error' });
        });
    } else {
      res.status(412).json({ message: 'Already exists' });
    }
  });
};

exports.findAll = function(req, res) {
  db.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Error' });
    });
};

exports.findAOne = function(req, res) {
  db.findOne({ _id: req.params.id }, {})
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      res.status(400).json({ message: 'Error' });
    });
};

exports.update = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  })
    .then((course) => {
      if (!course) {
        res.status(404).json({ message: "Couldn't find course with requested ID" });
      }

      res.status(200).json({ message: 'success' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error' });
    });
};
