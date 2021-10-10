import React from 'react';
import './Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PostAddIcon from '@material-ui/icons/PostAdd';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Link to='/'>
            <p>
              <DashboardIcon /> Home
            </p>
          </Link>
          <Link to='/products'>
            <p>
              <DashboardIcon /> Product
            </p>
          </Link>
          <Link to='/contact'>
            <p>
              <PostAddIcon /> Contact
            </p>
          </Link>
          <Link to='/about'>
            <p>
              <PostAddIcon /> About
            </p>
          </Link>
          <Link to='/search'>
            <p>
              <PostAddIcon /> Search
            </p>
          </Link>
          <Link to='/login'>
            <p>
              <PostAddIcon /> Login
            </p>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
