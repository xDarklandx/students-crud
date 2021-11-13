// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './navbar/Navbar';
import StudentAdd from './studentAdd/StudentAdd';
import StudentsList from './studentsList/StudentsList';
import StudentEdit from './studentEdit/StudentEdit';
import Home from './home/Home';

function App() {
  return (
    // Container
    <div className="App">
      {/* Navbar */}
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add-student" element={<StudentAdd />} />
          <Route path="/list-student" element={<StudentsList />} />
          <Route path="/edit-student" element={<StudentEdit />} />
          <Route path="/edit-student/:id" element={<StudentEdit />} />
          <Route path="/home" element={<Home/>}/>

          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>

      {/* <h1>Lista de Estudiantes</h1>

    {studentList.map((val, key) => {
      return <div> <h3>{val.studentFirstName}</h3> </div>
    })} */}

      {/* checked={studentGender === 'M'} */}
    </div>
  );
}

export default App;
