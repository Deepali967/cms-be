const faq = require("./faq.rest");
const help = require("./help.rest");

module.exports = {
  initilizeRest: function (app) {
    faq.initilizeApp(app);
    help.initilizeApp(app);
  },
};
