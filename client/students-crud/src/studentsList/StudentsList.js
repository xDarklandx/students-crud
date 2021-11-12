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

const deleteStudent = id => {
  Axios.delete(`http://localhost:3001/delete/${id}`);
  console.log(id);
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then(Response => {
      console.log(Response);
      setStudentList(Response.data);
    });
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
        <h1>Students List</h1>

        <TableContainer style={{ maxWidth: '800px' }} component={Paper}>
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

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Student: {selectedStudent.studentFirstName} {selectedStudent.studentLastName} </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div>
              <h2> Name: {selectedStudent.studentFirstName} </h2>
              <h2> Last Name: {selectedStudent.studentLastName} </h2>
              <h2> Birthdate: {selectedStudent.studentBirthday} </h2>
              <h2> Email: {selectedStudent.studentEmail}</h2>
              <h2> Address: {selectedStudent.studentAddress} </h2>
              <h2> Gender: {selectedStudent.studentGender} </h2>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
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
