import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from '../../avatar.jpg';
import Typed from 'react-typed';

//CSS styles
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: {
    color: 'tomato'
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem'
  },
  typedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate( -50%, -50%)',
    width: "100vw",
    textAlign: 'center',
    zIndex: 1
  }
}))


const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify='center'>
        <Avatar className={classes.avatar} src={avatar} alt='avatar' />
      </Grid>
      <Typography className={classes.title} variant='h4'>
        <Typed strings={["Temurbek Xaydarov"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.title} variant='h5'>
        <Typed strings={['Front End Development', "Programming Skills"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography variant='h5' className={classes.subtitle}>
        <Typed strings={["HTML 5", "CSS 3", 'Bootstrap', 'JavaScript (ES6 ES7)', 'React JS', 'React Router', 'Redux', 'Styled Component', 'FireBase', 'Git and Git Hub', 'Material UI', "C++"]} typeSpeed={40} loop />
      </Typography>
    </Box>
  )
}

export default Header;
