import React,{ useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { Flags } from 'react-feature-flags';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../Images/logo192.png'
import Box from '@material-ui/core/Box';
import Copyleft from '../../Components/Copyleft'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));
  
function Home() {
  useEffect(() => {
    document.title = "Liminal - Home"
  }, []);

    const classes = useStyles();

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
                  <img src={logo} alt="liminal logo"/>
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
              <Box mt={8}>
                <Copyleft />
              </Box>                             
            </Grid>
          </Flags>
      </div> 
    );
  }

  export default Home;