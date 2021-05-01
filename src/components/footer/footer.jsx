import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250
    },
    "& .MuiSvgIcon-root": {
      fill: 'tan',
      "&:hover": {
        fill: 'tomato',
        fontSize: '1.8rem'
      }
    }
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: '#222' }}>
      <a href='https://facebook.com/mernStackDeveloper' target='_blank' style={{ display: 'inline-block', margin: '0', padding: '20px 0', textAlign: 'center' }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Facebook />}
        />
      </a>
      {/* <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Twitter />}
      /> */}
      <a href='https://twitter.com/temurbek_4224' target='_blank' style={{ display: 'inline-block', margin: '0', padding: '20px 0', textAlign: 'center' }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Twitter />}
        />
      </a>
      {/* <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        icon={<Instagram />}
      /> */}
      <a href='https://t.me/Temurbek_Xaydarov' target='_blank' style={{ display: 'inline-block', margin: '0', padding: '20px 0', textAlign: 'center' }}>
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<TelegramIcon />}
        />
      </a>
    </BottomNavigation >
  )
}

export default Footer;
