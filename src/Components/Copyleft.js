import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    copyleft: { 
        display:'inline-block',
        transform: 'rotate(180deg)',
    },
  }));

export default function Copyleft() {
    const classes = useStyles();

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyleft '}
        <span className={classes.copyleft}>&copy;</span>
        {' '}
        liminal
        {' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }