const db = require("../db");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const help = new Schema({
  title: {
    type: String,
    required: true,
  },

  subtitle: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  desc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("help", help);
