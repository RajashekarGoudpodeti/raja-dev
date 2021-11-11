const mongoose = require("mongoose");


const StudentSchema = new mongoose.Schema({
  name: String,
  yearOfBatch: Date, 
  college: String,  
  skills : Array
});


const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;