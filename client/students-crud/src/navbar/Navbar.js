import React from 'react'
import Toolbar from '@mui/material/Toolbar';
// import * as StyleLink from '@mui/material/Link';
import {NavLink} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
// import StudentAdd from './studentAdd/StudentAdd';

const Navbar = () => {
    return <>
<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Students
          </Typography>
            <NavLink
              variant="button"
              color="text.primary"
              to="/add-student"
            > 
            <div style={{ marginRight: '1rem' }}>
            <Button variant="contained" sx={{ my: 1, mx: 2.5 }}>
              Add Student
              </Button>
            </div>
            </NavLink>
            <NavLink
              variant="button"
              color="text.primary"
              to="/list-student"
            >
            <div style={{ marginRight: '1rem' }}>
            <Button variant="contained" sx={{ my: 1, mx: 2.5 }}>
              Students
            </Button>
            </div>
            </NavLink>
          
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      </>
    
  };
  
  export default Navbar;




