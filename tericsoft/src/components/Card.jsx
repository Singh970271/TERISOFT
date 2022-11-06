import React, { useEffect, useState } from 'react'
import axios from "axios";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {  useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { Notedata, NoteFailure, NoteRequest, NoteSuccess } from '../Redux/action';
import Movie from './Movie';

const CardDemo = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

    const pages = ['MOVIES', 'GOLF', 'GYMNASTICS'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const [isLoading, setIsloading] = useState(true);
    const note=useSelector((store)=>store.note.note)
    const dispatch=useDispatch()



    useEffect(()=>{
        dispatch(Notedata())
        setIsloading(false);
        },[]);
        
 

    // dispatch(NoteRequest());

    // axios.get("http://localhost:8080/data")
    // .then((r)=>{
    //   console.log(r.data)
    //   dispatch(NoteSuccess(r.data))})
      
    // .catch((e)=>dispatch(NoteFailure(e)))
 

if (isLoading) {

    return <h1 className="load"> Loading... </h1>;
  }
   

  return (

    <div> 
  
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx= {{ display: { xl: 'none', md: 'flex' }, mr: 10 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           CYCLING
          </Typography>

        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  
        Highlights...

  {note?.map((e)=>{

return( 
         
          <Card sx={{ Width: "100%" }}>

      <CardContent>
        <Typography sx={{ fontSize: 15 }} gutterBottom>
        <img src={e.images} />
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          
          <Button variant="contained" >
          <span>TITLE : </span>
          {e.title}
          </Button>
         
        </Typography>
        <Typography variant="body2">
        
            <Button variant="contained" >
            <span>DESCRIPTION : </span>
            {e.Description}
</Button>
        </Typography>
        
        <Typography variant="body2">
        
             <Button variant="contained">
             <span > DATE:  </span>
                      {e.Date}
   </Button>
        </Typography>
      </CardContent>
     

    </Card>
)
    })}
     </div>
  )
}


  

export default CardDemo