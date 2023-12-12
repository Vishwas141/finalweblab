const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  dob: Date,
  previousSchool: String,
  course: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
