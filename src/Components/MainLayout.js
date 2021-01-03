import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuCloseIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { Flags } from 'react-feature-flags';
import SideMenuItem from './SideMenuItem';
import MenuIcon from './SideMenuIcon';
import Home from '../Views/Home';
import About from '../Views/About';
import NotFound from '../Views/NotFound';
import TelemetryProvider from './TelemetryProvider';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: 36,
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
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

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  const isMenuOpen = Boolean(anchorEl);
 
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = 'primary-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        {['Profile', 'Account'].map((text, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>{text}</MenuItem>
        ))}
    </Menu>
  );

  return (
    <div className={classes.grow}>
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <BrowserRouter>
        <TelemetryProvider instrumentationKey="a2b19403-81a5-4894-ab9a-bc83fe042d1d">
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
                  <SideMenuItem key={index} text={text} open={open} link={Link} icon={ <MenuIcon name={text}/> }/>
                ))}
              </List>
            </Flags>
          </Drawer>
          <main className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}>
            <Switch>
                <Route exact path="/" render={() => <Home/>} />
                <Route path="/Home" render={() => <Home/>} />
                <Route path="/About" render={() => <About/>} />
                <Route component={NotFound} />
            </Switch>
          </main>
          </TelemetryProvider>
        </BrowserRouter>
    </div>
  );
}
