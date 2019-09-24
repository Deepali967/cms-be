const db = require('../db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courses = new Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('courses', courses);
