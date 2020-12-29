import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Images/logo192.png'
import { useAppInsightsContext } from "@microsoft/applicationinsights-react-js";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));
  
export default function Home() {
    const classes = useStyles();
    const appInsights = useAppInsightsContext();
    
    appInsights.trackMetric("Component 'Home Page' is in use");
  
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
                <img src={logo} alt="limianl logo"/>
            </Grid>
            <Grid item xs={4}>
                  <Typography variant="h4" gutterBottom align='center'>
                    An authentication and authorisation solution that works for you
                  </Typography>
                  <Typography variant="body1" gutterBottom  align='center'>
                      Identity and access control solutions for modern applications built on .Net, 
                      including single sign-on, identity management, authorisation, and API security.
                  </Typography>
                  <Typography variant="body1" gutterBottom  align='center'>
                      Based on successful open source projects like IdentityServer,
                      with the flexibility to meet your requirements.
                  </Typography>
            </Grid>  
          </Grid>
      </div> 
    );
  }