import React from 'react';
// import { ReactVideo } from 'reactjs-media';
// import video from '../../gone.mp4';
// import './resume.styles.scss';
import Pdf from '../../Temurbek Xaydarov.pdf';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import Navbar from '../navbar/navbar.component';


// const Resume = () => (
//   <div className='resume-container'>
//     <Navbar />
//     <ReactVideo
//       src={video}
//       poster="https://img.freepik.com/free-photo/online-live-video-marketing-concept_12892-37.jpg?size=626&ext=jpg&ga=GA1.2.699125266.1619308800"
//       primaryColor="blue"
//       className='video-player'
//     // other props
//     />
//     <a href={Pdf} target="_blank">Download Pdf</a>
//   </div>
// );
// export default Resume;






const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: 'rgba(34,51,51,0.3)'
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    "&:bofore": {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0
    },
    "&:after": {
      content: "''",
      display: 'table',
      clear: 'both'
    },
    [theme.breakpoints.up("md")]: {
      padding: '2rem',
      "&:before": {
        left: 'calc(50% - 1px)',
        right: 'auto'
      }
    }
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: '1rem',
      "&:nth-of-type(2n)": {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan'
      },
      "&:nth-of-type(2n):before": {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato'
      }
    }
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: "9.375rem",
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    background: 'tomato',
    color: 'white',
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: 'center',
      margin: '0 auto',
      "&:nth-of-type(2n)": {
        float: 'none',
        margin: '0 auto'
      },
      "&:nth-of-type(2n):before": {
        display: 'none'
      }
    }
  },
  heading: {
    color: 'tomato',
    padding: '3rem 0',
    textTransform: "uppercase"
  },
  subHeading: {
    color: 'white',
    padding: '0',
    textTransform: 'uppercase'
  }
}));

function Resume() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component='header' className={classes.mainContainer}>
        <Typography variant='h4' align='center' className={classes.heading}>
          Learning Experience
          <a href={Pdf} target='_blank' style={{ display: 'inline-block', margin: '0', padding: '0', marginLeft: '20px', textAlign: 'center', textDecoration: 'none', backgroundColor: 'yellow', borderRadius: '5px', color: '#fff' }}><Button>Dawnload CV</Button></a>
        </Typography>
        <Box component='div' className={classes.timeLine}>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2018
          </Typography>
          <Box className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
              C++
            </Typography>
            <Typography variant='body1' align='center' style={{ color: 'tomato' }}>
              Tashkent University of Information Technology
            </Typography>
            <Typography variant='subtitle1' align='center' style={{ color: 'tan' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque ut exercitationem recusandae est dolorem mollitia ipsam libero culpa aut?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2019
          </Typography>
          <Box className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
              HTML and CSS
            </Typography>
            <Typography variant='body1' align='center' style={{ color: 'tomato' }}>
              Tashkent University of Information Technology
            </Typography>
            <Typography variant='subtitle1' align='center' style={{ color: 'tan' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque ut exercitationem recusandae est dolorem mollitia ipsam libero culpa aut?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
          </Typography>
          <Box className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
              JavaScript and JQuery
            </Typography>
            <Typography variant='body1' align='center' style={{ color: 'tomato' }}>
              Tashkent University of Information Technology
            </Typography>
            <Typography variant='subtitle1' align='center' style={{ color: 'tan' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque ut exercitationem recusandae est dolorem mollitia ipsam libero culpa aut?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2020
          </Typography>
          <Box className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
              DBMS (Sql) Advenced JS(ES6,ES7 ...)
            </Typography>
            <Typography variant='body1' align='center' style={{ color: 'tomato' }}>
              Tashkent University of Information Technology
            </Typography>
            <Typography variant='subtitle1' align='center' style={{ color: 'tan' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque ut exercitationem recusandae est dolorem mollitia ipsam libero culpa aut?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
            2021
          </Typography>
          <Box className={classes.timeLineItem}>
            <Typography variant='h5' align='center' className={classes.subHeading}>
              RactJS ,  Redux ...
            </Typography>
            <Typography variant='body1' align='center' style={{ color: 'tomato' }}>
              Tashkent University of Information Technology
            </Typography>
            <Typography variant='subtitle1' align='center' style={{ color: 'tan' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque ut exercitationem recusandae est dolorem mollitia ipsam libero culpa aut?
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Resume;
