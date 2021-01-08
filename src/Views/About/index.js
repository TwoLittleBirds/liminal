import React, { useEffect } from 'react';
import Async from 'react-async';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { Flags } from 'react-feature-flags';
import fetchRetry  from '../../Components/FetchRetry'


var pjson = require('../../../package.json');
 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function About() {
  useEffect(() => {
    document.title = "Liminal - About"
  }, []);

    const classes = useStyles()

    const loadWebApiVersionAsync = async () => {
      const response = await fetchRetry(`https://liminal-d-webapi.azurewebsites.net/version`, 
        {
          method: 'GET',
          headers: {'Access-Control-Allow-Origin': '*'}
        }, 3)  
      
        if (response === undefined) {
          throw new Error("Error in call to WebAPI");
        } 
      
        return response.text()
      }

    return (
      <div className={classes.root}>      
        <Flags authorizedFlags={["AdminOnly"]}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom align='center'>
                All rights reserved © 2020 liminal - Version {pjson.version}
              </Typography>
              <Async promiseFn={loadWebApiVersionAsync}>
                <Typography variant="body1" gutterBottom align='center'>
                  <Async.Pending>Loading...</Async.Pending>
                  <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                  </Async.Rejected>
                  <Async.Fulfilled>
                    {data => `using limina-d-webapi v${data}`}
                  </Async.Fulfilled>                  
                </Typography>
              </Async>     
            </Grid>   
            </Grid>           
        </Flags>
      </div>
    );
  }


