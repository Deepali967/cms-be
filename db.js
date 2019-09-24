const mongoose = require('mongoose');

const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'courses';
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
const Schema = mongoose.Schema;

mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully Connected TO database');
  })
  .catch((err) => {
    console.log('Error in connecting to database');
    process.exit();
  });

// const courses = new Schema({
//   name: {
//     type: String
//   }
// });

// module.exports = mongoose.model('courses', courses);
