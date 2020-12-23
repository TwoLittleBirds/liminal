import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuCloseIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from '../Views/Home';
import About from '../Views/About';
import NotFound from '../Views/NotFound';
import MenuItem from './MenuItem';
import MenuIcon from './MenuIcon';
import { Flags } from 'react-feature-flags';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: theme.spacing(9) + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function MainLayout() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        data-testid="menu-appbar"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar data-testid="menu-toolbar">
          <IconButton
            data-testid="menu-iconclose"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuCloseIcon />
          </IconButton>
          <Typography variant="h6" noWrap data-testid="menu-heading">
            Liminal
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Drawer
          data-testid="menu-drawer"      
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose} data-testid="menu-iconopen">
              <MenuOpenIcon />
            </IconButton>
          </div>
          <Divider data-testid="menu-divider"/>
          <Flags authorizedFlags={["AdminOnly"]}>
            <List data-testid="menu-options">
              {['Home', 'About'].map((text, index) => (
                <MenuItem key={index} text={text} open={open} link={Link} icon={ <MenuIcon name={text}/> }/>
              ))}
            </List>
          </Flags>
        </Drawer>
        <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          <div className={classes.toolbar} />

          <Switch>
            <Route exact path="/" render={() => <Home/>} />
            <Route exact path="/Home" render={() => <Home/>} />
            <Route path="/About" render={() => <About/>} />
            <Route path="/health">
                <h3>The App is Healthy</h3>
            </Route>
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}
