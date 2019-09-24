const course = require('./course.rest');

module.exports = {
  initilizeRest: function(app) {
    course.initilizeApp(app);
  }
};
