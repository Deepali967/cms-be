const db = require("../db");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const faq = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("faq", faq);
