import React, { useState } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import {
  Alert,
  Avatar,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormLabel,
} from '@mui/material';
import validator from 'validator';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router';

const theme = createTheme();

const StudentAdd = () => {
  const [studentFirstName, setstudentFirstName] = useState('');
  const [studentLastName, setstudentLastName] = useState('');
  const [studentBirthday, setstudentBirthday] = useState('');
  const [studentEmail, setstudentEmail] = useState('');
  const [studentAddress, setstudentAddress] = useState('');
  const [studentGender, setstudentGender] = useState('');
  const [showError, setshowError] = useState('');
  const [showErrorMessage, setErrorMessage] = useState('');

  const navigator = useNavigate();

  const addToList = () => {
    setshowError(false);

    if (
      !studentFirstName ||
      !studentLastName ||
      !studentBirthday ||
      !studentEmail ||
      !studentAddress ||
      !studentGender
    ) {
      setshowError(true);
      setErrorMessage('You have empty fields');
      return;
    }

    if (!validator.isEmail(studentEmail)) {
      setshowError(true);
      setErrorMessage('Verify the Email');
      return;
    }

    Axios.post('http://localhost:3001/insert', {
      studentFirstName: studentFirstName,
      studentLastName: studentLastName,
      studentBirthday: studentBirthday,
      studentEmail: studentEmail,
      studentAddress: studentAddress,
      studentGender: studentGender,
    });

    console.log('Datos insertados');
    console.log(studentFirstName);
    console.log(studentLastName);
    console.log(studentBirthday);
    console.log(studentEmail);
    console.log(studentAddress);
    console.log(studentGender);

    navigator('/list-student');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleChange = event => {
    setstudentGender(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PersonAddIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Student
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={event => setstudentFirstName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={event => setstudentLastName(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="birthday"
                    label="Birthdate"
                    type="date"
                    id="birthday"
                    onChange={event => setstudentBirthday(event.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={event => setstudentEmail(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    onChange={event => setstudentAddress(event.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="controlled-radio-buttons-group"
                    value={studentGender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </Grid>

                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>
              {showError && <Alert severity="error"> {showErrorMessage} </Alert>}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={addToList}
              >
                Add Student
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default StudentAdd;

// {/* <Grid
// container
// spacing={0}
// direction="column"
// alignItems="center"
// justify="center"
// style={{ minHeight: '100vh' }}
// >
// <Grid item xs={3}>
//   <form>
//     <label>Name: </label>
//     <br />
//     <input
//       className="input"
//       type="text"
//       onChange={event => setstudentFirstName(event.target.value)}
//     />
//     <br />
//     <br />
//     <label>Last Name: </label>
//     <br />
//     <input
//       className="input"
//       type="text"
//       onChange={event => setstudentLastName(event.target.value)}
//     />
//     <br />
//     <br />
//     <label>Birthdate: </label>
//     <br />
//     <input
//       className="input"
//       type="date"
//       onChange={event => setstudentBirthday(event.target.value)}
//     />
//     <br />
//     <br />
//     <label>Email:</label>
//     <br />
//     <input
//       className="input"
//       type="email"
//       onChange={event => setstudentEmail(event.target.value)}
//     />
//     <br />
//     <br />
//     <label>Address:</label>
//     <br />
//     <input
//       className="input"
//       type="text"
//       onChange={event => setstudentAddress(event.target.value)}
//     />
//     <br />
//     <br />
//     <label>Gender:</label>
//     <br />
//     <input
//       type="radio"
//       id="M"
//       name="gender"
//       value="Male"
//       onClick={() => setstudentGender('Male')}
//     />
//     <label htmlFor="M">Male</label>
//     <br />
//     <input
//       type="radio"
//       id="F"
//       name="gender"
//       value="Female"
//       onClick={() => setstudentGender('Female')}
//     />
//     <label htmlFor="F">Female</label>
//     <br />
//     <br />
//     <br />
//     {/* {showError && <Alert severity="warning">{{showErrorMessage}}</Alert>} */}

//     {showError && <Alert severity="error"> {showErrorMessage} </Alert>}

//     <Button variant="contained" onClick={addToList}>
//       Add Student
//     </Button>
//   </form>
// </Grid>
// </Grid>  */}
