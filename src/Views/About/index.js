import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

var pjson = require('../../../package.json');


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));
  
  export default function About() {
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
            <Grid item xs={4} alignItems="center" justify="center">
                  <Typography variant="body1" gutterBottom align='center'>
                    All rights reserved © 2020 liminal - Version {pjson.version}
                  </Typography>
            </Grid>  
          </Grid>
      </div>
    );
  }

