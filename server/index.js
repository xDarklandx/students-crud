const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const StudentsModel = require("./models/Students");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin:admin1234@darkcluster.n9gvi.mongodb.net/students?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const studentFirstName = req.body.studentFirstName;
  const studentLastName = req.body.studentLastName;
  const studentBirthday = req.body.studentBirthday;
  const studentEmail = req.body.studentEmail;
  const studentAddress = req.body.studentAddress;
  const studentGender = req.body.studentGender;

  const students = new StudentsModel({
    studentFirstName: studentFirstName,
    studentLastName: studentLastName,
    studentBirthday: studentBirthday,
    studentEmail: studentEmail,
    studentAddress: studentAddress,
    studentGender: studentGender,
  });
  try {
    await students.save();
    res.send("inserted data");
  } catch (error) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  StudentsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const student = await StudentsModel.findById(id).exec();

    if (!student) {
      res.send({});
    } else {
      res.send(student);
    }
  } catch (error) {
    res.send({});
  }
});

app.put("/update", async (req, res) => {
  const id = req.body.id;
  const studentFirstName = req.body.studentFirstName;
  const studentLastName = req.body.studentLastName;
  const studentBirthday = req.body.studentBirthday;
  const studentEmail = req.body.studentEmail;
  const studentAddress = req.body.studentAddress;
  const studentGender = req.body.studentGender;

  // const students = new StudentsModel({
  //     studentFirstName: studentFirstName,
  //     studentLastName: studentLastName,
  //     studentBirthday: studentBirthday,
  //     studentEmail: studentEmail,
  //     studentAddress: studentAddress,
  //     studentGender: studentGender
  // });
  try {
    await StudentsModel.findById(id, (err, updatedStudent) => {
      updatedStudent.studentFirstName = studentFirstName;
      updatedStudent.studentLastName = studentLastName;
      updatedStudent.studentBirthday = studentBirthday;
      updatedStudent.studentEmail = studentEmail;
      updatedStudent.studentAddress = studentAddress;
      updatedStudent.studentGender = studentGender;
      updatedStudent.save();
      res.send("updated data");
    });
  } catch (error) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await StudentsModel.findByIdAndRemove(id).exec();

  res.send("deleted");
});

app.listen(3001, () => {
  console.log("---Servidor activo en puerto 3001---");
});

// json
// // "test": "echo \"Error: no test specified\" && exit 1"
