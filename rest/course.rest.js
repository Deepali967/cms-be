const course = require('../model/course.model');

function initilizeApp(app) {
  app.get('/api/courses', (req, res) => {
    course.findAll(req, res);
  });

  app.get('/api/courses/:id', (req, res) => {
    course.findAOne(req, res);
  });

  app.post('/api/courses', (req, res) => {
    course.create(req, res);
  });

  app.post('/login', (req, res) => {
    login.login(req, res);
  });

  app.put('/api/courses/:id', (req, res) => {
    course.update(req, res);
  });
}

module.exports.initilizeApp = initilizeApp;
