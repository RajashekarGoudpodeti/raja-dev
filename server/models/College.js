const mongoose = require("mongoose");

const CollegeSchema = new mongoose.Schema({
  name: String,
  yearFounded: Date, 
  city: String,
  state: String,  
  country: String,
  noOfStudents: Number,
  courses : Array
});


const College = mongoose.model("College", CollegeSchema);

module.exports = College;