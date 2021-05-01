import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Particles from 'react-particles-js';
import Header from '../header/Header.component';
import Navbar from '../navbar/navbar.component';

const useStyles = makeStyles({
  particlesCanva: {
    position: 'absolute',
    opacity: "0.3"
  }
});

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: false,
                value_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 1,
                color: 'tomato'
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: true
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: true
              }
            }
          }
        }}
      />
    </>
  );
}

export default HomePage;