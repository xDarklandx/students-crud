import React, { useEffect, useState } from 'react';
import './StudentsList.css';
import Axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Pagination from '@mui/material/Pagination';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Slide,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const StudentsList = () => {

  const [open, setOpen] = React.useState(false);
  const [studentList, setStudentList] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});

  const handleClickOpen = (student) => {
    setOpen(true);
    setSelectedStudent(student);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchStudents = async () => {
    const students = await Axios.get('http://localhost:3001/read');
    console.log(students.data);
    setStudentList(students.data);
  }

  const deleteStudent = async id => {
    await Axios.delete(`http://localhost:3001/delete/${id}`);
    await fetchStudents();
    console.log(id);
  };
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Typography component="h1" variant="h4">
              Students List
            </Typography>

        <TableContainer style={{ maxWidth: '800px'}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table_header">Full Name</TableCell>
                <TableCell className="table_header" align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map((row, index) => (
                <TableRow
                  key={`${row.firstName}-${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.studentFirstName} {row.studentLastName}
                  </TableCell>
                  <TableCell align="center">
                    <Link to={`/edit-student/${row._id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>

                    <IconButton onClick={() => deleteStudent(row._id)}>
                      <DeleteIcon />
                    </IconButton>

                    <IconButton onClick={() => handleClickOpen(row)}>
                      <MenuBookIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
          </Table>
        </TableContainer>
      </Grid>
      {open && 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
            <div>
              <h1>Student Information</h1>
              <h3> Name: {selectedStudent.studentFirstName} </h3>
              <h3> Last Name: {selectedStudent.studentLastName} </h3>
              <h3> Birthdate: {selectedStudent.studentBirthday} </h3>
              <h3> Email: {selectedStudent.studentEmail}</h3>
              <h3> Address: {selectedStudent.studentAddress} </h3>
              <h3> Gender: {selectedStudent.studentGender} </h3>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      }
    </>
  );
};

export default StudentsList;

/* <div style={{ height: 400, width: '100%', maxWidth: '800px' }}>
<DataGrid
rows={studentList.map(row => ({ ...row, id: row._id }) )}
columns={columns}
pageSize={5}
rowsPerPageOptions={[5]}
checkboxSelection
/>
</div> */

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   {
//     field: 'fullName',
//     headerName: 'Name',
//     description: 'Name',
//     sortable: false,
//     width: 160,
//     valueGetter: params =>
//       `${params.getValue(params.id, 'studentFirstName') || ''} ${
//         params.getValue(params.id, 'studentLastName') || ''
//       }`,
//   },
//   { field: 'firstName', headerName: 'First name', width: 130 },
// ];
