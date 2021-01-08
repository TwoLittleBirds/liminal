import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
  }));

export default function SignIn() {
    useEffect(() => {
      document.title = "Liminal - Sign In"
    }, []); 
  
      const classes = useStyles()
   
      return (
        <div className={classes.root}>      
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}>
              <Grid item xs={4}>
                <Typography variant="body1" gutterBottom align='center'>
                  Sign in...
                </Typography>
              </Grid>   
              </Grid>           
        </div>
      );
    }