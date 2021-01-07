import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));
  
  export default function NotFound() {
    useEffect(() => {
      document.title = "Liminal - Not Found"
    }, []);
    const classes = useStyles();

    return (
      <div className={classes.root}>      
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
            <Grid item xs={4}>   
              <Typography variant="h1" gutterBottom align='center'>
                404 :(
              </Typography>
              <Typography variant="h5" gutterBottom align='center'>
                This is not the page you are looking for!
              </Typography>
            </Grid>  
          </Grid>
      </div>
    );
  }

