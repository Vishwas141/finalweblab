const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
      const student = new Student(req.body);
      console.log(student);
      
    await student.save();
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
