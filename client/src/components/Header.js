import React from 'react';
import {Navbar,Nav, Container} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () =>{
    return(
    <Navbar bg='light' variant='light'>
        <Navbar.Brand href="/">
            <img
              src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="Moringa"
            />
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
            <Nav style= {{color: 'blue'}} >
                <Nav.Link as={Link} to="about">About</Nav.Link>
                <Nav.Link as={Link} to="projects">Projects</Nav.Link>
                <NavDropdown title="Cohorts" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">2022 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">2021 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">2020 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">2019 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">2018 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">2017 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.7">2016 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.8">2015 Cohorts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.9">2014 Cohorts</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="community">Community</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
            <Nav style= {{color: 'blue'}} >
                <Nav.Link as={Link} to="login">LogIn</Nav.Link>
                
            </Nav>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Navbar.Collapse>
    </Navbar>
    
    ) 
}

export default  Header;