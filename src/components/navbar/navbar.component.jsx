import React, { useState } from 'react';
import avatar from '../../avatar.png';
import { Link } from 'react-router-dom';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon
} from '@material-ui/core';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../footer/footer';

//CSS styles
const useStyles = makeStyles(theme => (
  {
    menuSliderContainer: {
      width: 250,
      background: '#511',
      height: '100%'
    },
    avatar: {
      display: 'block',
      margin: '0.5rem auto',
      width: theme.spacing(13),
      height: theme.spacing(13)
    },
    listItem: {
      color: 'tan'
    }
  }
));

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/'
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume'
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio'
  },
  {
    listIcon: <ContactMail />,
    listText: 'Contacts',
    listPath: '/contacts'
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  });
  const toggleSlider = (slider, open) => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = slider => (

    <Box
      component='div'
      className={classes.menuSliderContainer}
      onClick={() => toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt='Break Rassoles' />
      <Divider />
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem button component={Link} to={menuItem.listPath} key={index}>
            <ListItemIcon className={classes.listItem}>
              {menuItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={menuItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )
  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#222' }} >
          <Toolbar>
            <IconButton onClick={() => toggleSlider('right', true)}>
              <ArrowBack style={{ color: 'tomato' }} />
            </IconButton>
            <Typography variant='h5' style={{ color: 'tan' }}>
              Portfolio
          </Typography>
            <MobilRightMenuSlider
              anchor='right'
              open={state.right}
              onClose={() => toggleSlider("right", false)}
            >
              {sideList('right')}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Navbar;