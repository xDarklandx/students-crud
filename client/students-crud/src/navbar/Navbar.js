import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
// import * as StyleLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { IconButton } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    backgroundColor: green[500]
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));


const Navbar = () => {

  const navigator = useNavigate();

  const classes = useStyles();
  const [Color, setColor] = useState("primary");
  const isCustomColor = Color === "customColor";
  const isCustomHeight = Color === "customHeight";

  const Add = () => {
  navigator('/add-student');
}

const List = () => {
  navigator('/list-student');
}

const Home = () => {
  navigator('/home');
}
    return <>
    <AppBar
        color={isCustomColor || isCustomHeight ? "primary" : Color}
        className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={Home}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Student Database
          </Typography>
          
          <IconButton onClick={Add} color="inherit" >
            Add Students
          </IconButton>
          
          <IconButton onClick={List} color="inherit" >
            Student List
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Toolbar />


      </>
    
  };
  
  export default Navbar;




// <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none',zIndex: 1 } }} />
//       <CssBaseline />
//       <AppBar
//         position="static"
//         color="default"
//         elevation={0}
//         sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
//       >
//         <Toolbar sx={{ flexWrap: 'wrap' }}>
//           <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
//             Students
//           </Typography>
//             <NavLink
//               variant="button"
//               color="text.primary"
//               to="/add-student"
//             > 
//             <div style={{ marginRight: '1rem' }}>
//             <Button variant="contained" sx={{ my: 1, mx: 2.5 }}>
//               Add Student
//               </Button>
//             </div>
//             </NavLink>
//             <NavLink
//               variant="button"
//               color="text.primary"
//               to="/list-student"
//             >
//             <div style={{ marginRight: '1rem' }}>
//             <Button variant="contained" sx={{ my: 1, mx: 2.5 }}>
//               Students
//             </Button>
//             </div>
//             </NavLink>
          
//           <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>