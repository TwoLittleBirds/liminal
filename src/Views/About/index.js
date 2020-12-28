import React from 'react';
import Async from 'react-async';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

var pjson = require('../../../package.json');

const loadWebApiVersionAsync = async () => {
  const response = await fetch(`https://liminal-d-webapi.azurewebsites.net/version`)
  if (!response.ok) throw new Error(response.statusText)

  return response.json()
}

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
            <Grid item xs={4}>
              <Async promiseFn={loadWebApiVersionAsync}>
                <Typography variant="body1" gutterBottom align='center'>
                  <Async.Pending>Loading...</Async.Pending>
                  <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                  </Async.Rejected>
                  <Async.Fulfilled>
                    using liminal-webapi v{data => data}
                  </Async.Fulfilled>                  
                </Typography>
              </Async>     
              <Typography variant="body1" gutterBottom align='center'>
                All rights reserved © 2020 liminal - Version {pjson.version}
              </Typography>
            </Grid>  
          </Grid>
      </div>
    );
  }

