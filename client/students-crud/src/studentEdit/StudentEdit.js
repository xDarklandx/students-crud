import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Axios from 'axios';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const StudentEdit = () => {
    const navigator = useNavigate();
    const {id} = useParams();
    console.log(id);

  const [studentFirstName, setstudentFirstName] = useState('');
  const [studentLastName, setstudentLastName] = useState('');
  const [studentBirthday, setstudentBirthday] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentAddress, setstudentAddress] = useState('');
  const [studentGender, setstudentGender] = useState('M');

  useEffect(() => {
      const Effect = async () => {
        const student = await getStudent(id);
        if(!student){
            navigator('/');
        }else{
            setstudentFirstName(student.studentFirstName);
            setstudentLastName(student.studentLastName);
            setstudentBirthday(student.studentBirthday);
            setstudentEmail(student.studentEmail);
            setstudentAddress(student.studentAddress);
            setstudentGender(student.studentGender);
        }
      };
       Effect();
  }, [id] )

  const getStudent = async (id) => {
    const Response = await Axios.get(`http://localhost:3001/read/${id}`);
    const StudentData = Response.data;

    if(JSON.stringify(StudentData) === '{}' ){
        return null;
    }

    return StudentData;

  }

  const updateStudent = (id) => {
    Axios.put('http://localhost:3001/update', {
      id: id,
      studentFirstName: studentFirstName,
      studentLastName: studentLastName,
      studentBirthday: studentBirthday,
      studentEmail: studentEmail,
      studentAddress: studentAddress,
      studentGender: studentGender,
    });

    console.log('Datos actualizados');
    console.log(studentFirstName);
    console.log(studentLastName);
    console.log(studentBirthday);
    console.log(studentEmail);
    console.log(studentAddress);
    console.log(studentGender);
  };

  console.log('Datos');
    console.log(studentFirstName);
    console.log(studentLastName);
    console.log(studentBirthday);
    console.log(studentEmail);
    console.log(studentAddress);
    console.log(studentGender);

  return (
    <>
      <h1>Edit Student</h1>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <form>
            <label>Name: </label>
            <br />
            <input
              className="input"
              type="text"
              value={ studentFirstName }
              onChange={event => setstudentFirstName(event.target.value)}
            />
            <br />
            <br />
            <label>Last Name: </label>
            <br />
            <input
              className="input"
              type="text"
              value={studentLastName}
              onChange={event => setstudentLastName(event.target.value)}
            />
            <br />
            <br />
            <label>Birthdate: </label>
            <br />
            <input
              className="input"
              type="date"
              value={studentBirthday}
              onChange={event => setstudentBirthday(event.target.value)}
            />
            <br />
            <br />
            <label>Email:</label>
            <br />
            <input
              className="input"
              type="text"
              value={studentEmail}
              onChange={event => setstudentEmail(event.target.value)}
            />
            <br />
            <br />
            <label>Address:</label>
            <br />
            <input
              className="input"
              type="text"
              value={studentAddress}
              onChange={event => setstudentAddress(event.target.value)}
            />
            <br />
            <br />
            <label>Gender:</label>
            <br />
            <input
              type="radio"
              id="M"
              name="gender"
              value="Male"
              checked={studentGender === 'Male'}
              onClick={() => setstudentGender('Male')}
            />
            <label htmlFor="M">Male</label>
            <br />
            <input
              type="radio"
              id="F"
              name="gender"
              value="Female"
              checked={studentGender === 'Female'}
              onClick={() => setstudentGender('Female')}
            />
            <label htmlFor="F">Female </label>
            <br />
            <br />
            <br />
            <Button variant="contained" onClick={() => updateStudent(id)}>
              Update Data
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default StudentEdit;
