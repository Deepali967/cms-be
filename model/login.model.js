const db = require('../schema/login.schema');

exports.login = function(req, res) {
  if (!req.body.email || !req.body.pass) {
    res.status(412).json({ message: 'Parameters mising' });
  } else {
    if (req.body.email === 'admin' && req.body.pass === 'admin') {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(401).json({ message: 'invalid credentials' });
    }
  }
};
