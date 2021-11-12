import React, { useState } from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button'
import { Grid } from '@mui/material';

const StudentAdd = () => {

  const [studentFirstName, setstudentFirstName] = useState('')
  const [studentLastName, setstudentLastName] = useState('');
  const [studentBirthday, setstudentBirthday] = useState('');
  const [studentEmail, setstudentEmail ] = useState('');
  const [studentAddress, setstudentAddress] = useState('');
  const [studentGender, setstudentGender] = useState('M');

  const addToList = () => {
    Axios.post('http://localhost:3001/insert', {studentFirstName: studentFirstName,studentLastName: studentLastName,studentBirthday:studentBirthday, studentEmail:studentEmail,studentAddress:studentAddress,studentGender:studentGender
  });

    console.log('Datos insertados')
    console.log(studentFirstName);
    console.log(studentLastName);
    console.log(studentBirthday);
    console.log(studentEmail);
    console.log(studentAddress);
    console.log(studentGender);
   }

    return <>

<h1>Add Student</h1>
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
    <label>Name: </label><br/>
    <input className="input" type="text" onChange={(event) => setstudentFirstName(event.target.value)} /> 
    <br/>
    <br/>
    <label>Last Name: </label><br/>
    <input className="input" type="text" onChange={(event) => setstudentLastName(event.target.value)} /> 
    <br/>
    <br/>
    <label>Birthdate: </label><br/>
    <input className="input" type="date" onChange={(event) => setstudentBirthday(event.target.value)} />
    <br/>
    <br/>
    <label>Email:</label><br/>
    <input className="input" type="text" onChange={(event) => setstudentEmail(event.target.value)} />
    <br/>
    <br/>
    <label>Address:</label><br/>
    <input className="input" type="text" onChange={(event) => setstudentAddress(event.target.value)}/>
    <br/>
    <br/>
    <label>Gender:</label><br/>
    <input type="radio" id="M" name="gender" value="Male" onClick={() => setstudentGender('Male')}/> 
    <label htmlFor="M">Male</label><br/>
    <input type="radio" id="F" name="gender" value="Female" onClick={() => setstudentGender('Female')}/>
    <label htmlFor="F">Female</label><br/>
    <br/><br/>
    <Button variant="contained" onClick={addToList} >Add Student</Button>
    </form>
    
    </Grid>   

</Grid> 

  </>
  };
  
  export default StudentAdd;