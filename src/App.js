import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainMenu from './components/MainMenu';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <CssBaseline />

      <MainMenu/>
      
      <main className={classes.content}>
      </main>
    </div>
  );
}
