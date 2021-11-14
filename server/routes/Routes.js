const express = require("express");
const collegeModel = require("../models/College");
const studentModel = require("../models/Student");
const app = express();


app.post("/add_college", async (request, response) => {
    const college = new collegeModel(request.body);
  
    try {
      await college.save();
      response.send(college);
    } catch (error) {
      response.status(500).send(error);
    }
});



app.get("/colleges", async (request, response) => {
  let reqBody = {}
  if(request && request.query) {
  let id = request.query.id;
  let name = request.query.name;
  let courses = request.query.courses && request.query.courses.split(';');
  let state = request.query.state;
  if(id) {
     reqBody._id = id;
  }
  if(name) {
    reqBody.name = name;
  }
  if(courses) {
    reqBody = { courses: { $all: courses } } ;
  }
  if(state) {
    reqBody.state = state;
  }
}
    const colleges = await collegeModel.find(reqBody);
  
    try {
      response.send(colleges);
    } catch (error) {
      response.status(500).send(error);
    }
  });


  app.post("/add_student", async (request, response) => {
    const student = new studentModel(request.body);
  
    try {
      await student.save();
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
});



app.get("/students", async (request, response) => {
  console.log('request is',request.query);
    let reqBody = {}
    if(request && request.query) {
    let id = request.query.id;
    let college = request.query.college;
    let colleges = request.query.colleges && request.query.colleges.split(';');
    let course = request.query.course;
    if(id) {
       reqBody._id = id;
    }
    if(college) {
      reqBody.college = college;
    }
    if(course) {
      reqBody.courses = course;
    }
     if(colleges) {
       reqBody.college = colleges;
     }
  }
    const students = await studentModel.find(reqBody);

    try {
      response.send(students);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;