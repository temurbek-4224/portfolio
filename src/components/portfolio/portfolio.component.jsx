import React from 'react';
import Navbar from '../navbar/navbar.component';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import project1 from '../../images/html-css-javascript-lg.jpg';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'rgba(34,51,51,0.3)',
    height: '100%'
    // color: ''
  },
  cardContainer: {
    '&:hover': {
      // transform: 'rotateX(10deg) rotateY(-30deg)',
      transition: '0.2s',
      boxShadow: '0px 0px 10px 2px yellow'
    },
    boxShadow: '0px 0px 10px 2px #ccc',
    maxWidth: 345,
    margin: '1rem',
    margin: '2rem auto'
  }
})

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.mainContainer}>
      <Navbar />
      <Grid container justify='center'>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                height='140'
                image={'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/keto-meal-prep-3.jpg'}
              />
              <CardContent>
                <Typography variant='h5'>
                  Search Meal
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime facere earum harum qui rem deserunt perferendis quibusdam et natus. Praesentium consequuntur quis fugiat facere ullam ipsa. Quas, impedit dicta?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
                </Button>
              <Button size='small' color='primary'>
                <a
                  href="https://mealrecipe-site.netlify.app/"
                  target='_blank'
                  style={{ textDecoration: 'none', color: '#000', padding: '3px 5px', backgroundColor: 'rgb(9, 139, 199)', borderRadius: '5px' }}
                >Live Demo</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                height='140'
                image={'https://i.ytimg.com/vi/ceqOTZnhgY8/maxresdefault.jpg'}
              />
              <CardContent>
                <Typography variant='h5'>
                  Breaking Bad
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime facere earum harum qui rem deserunt perferendis quibusdam et natus. Praesentium consequuntur quis fugiat facere ullam ipsa. Quas, impedit dicta?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
                </Button>
              <Button size='small' color='primary'>
                <a
                  href="https://breaking-bad-app-4224.netlify.app/"
                  target='_blank'
                  style={{ textDecoration: 'none', color: '#000', padding: '3px 5px', backgroundColor: 'rgb(9, 139, 199)', borderRadius: '5px' }}
                >Live Demo</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                height='140'
                image={'https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_AT_guitar_acoustics.png'}
              />
              <CardContent>
                <Typography variant='h5'>
                  Find Lyrics
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime facere earum harum qui rem deserunt perferendis quibusdam et natus. Praesentium consequuntur quis fugiat facere ullam ipsa. Quas, impedit dicta?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
                </Button>
              <Button size='small' color='primary'>
                <a
                  href="https://temurbek-4224.github.io/temurbek-lyrics-site/"
                  target='_blank'
                  style={{ textDecoration: 'none', color: '#000', padding: '3px 5px', backgroundColor: 'rgb(9, 139, 199)', borderRadius: '5px' }}
                >Live Demo</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                height='140'
                image={'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/12/Easy-Dinner-Ideas-1-1.jpg'}
              />
              <CardContent>
                <Typography variant='h5'>
                  Meal Recipes
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime facere earum harum qui rem deserunt perferendis quibusdam et natus. Praesentium consequuntur quis fugiat facere ullam ipsa. Quas, impedit dicta?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
                </Button>
              <Button size='small' color='primary'>
                <a
                  href="https://recipes-meal-app.netlify.app/"
                  target='_blank'
                  style={{ textDecoration: 'none', color: '#000', padding: '3px 5px', backgroundColor: 'rgb(9, 139, 199)', borderRadius: '5px' }}
                >Live Demo</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                height='140'
                image={'https://www.capermint.com/wp-content/uploads/2021/01/TicTacToe-game-development.png'}
              />
              <CardContent>
                <Typography variant='h5'>
                  Tic Tac Toe
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime facere earum harum qui rem deserunt perferendis quibusdam et natus. Praesentium consequuntur quis fugiat facere ullam ipsa. Quas, impedit dicta?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
                </Button>
              <Button size='small' color='primary'>
                <a
                  href="https://tic-tac-toe-game4224.netlify.app/"
                  target='_blank'
                  style={{ textDecoration: 'none', color: '#000', padding: '3px 5px', backgroundColor: 'rgb(9, 139, 199)', borderRadius: '5px' }}
                >Live Demo</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='project 1'
                height='140'
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYj6-qDa7XeLzz89tq3MyQfbRYg4HutX2Vg&usqp=CAU'}
              />
              <CardContent>
                <Typography variant='h5'>
                  Robo Friends
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In maxime facere earum harum qui rem deserunt perferendis quibusdam et natus. Praesentium consequuntur quis fugiat facere ullam ipsa. Quas, impedit dicta?
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size='small' color='primary'>
                Share
                </Button>
              <Button size='small' color='primary'>
                <a
                  href="https://roboto-friends-app.netlify.app/"
                  target='_blank'
                  style={{ textDecoration: 'none', color: '#000', padding: '3px 5px', backgroundColor: 'rgb(9, 139, 199)', borderRadius: '5px' }}
                >Live Demo</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Portfolio;
