const db = require('../db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const login = new Schema({
  email: {
    type: String
  },
  passowrd: {
    type: String
  }
});

module.exports = mongoose.model('login', login);
