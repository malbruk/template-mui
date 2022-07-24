import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AppsIcon from '@material-ui/icons/Apps';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkBrand: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    }
  },
  linkBrandSmall: {
    display: 'none',
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
    }
  },
  secondaryButton: {
    marginRight: theme.spacing(2),
  },
  drawerContainer: {
    width: 256,
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
<AppBar position="static">
  <Toolbar>
    
    <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrand}>
      <img src="https://static.shuffle.dev/uploads/files/58/581ee14b5d1d626020267fc0754f9cea02f47f64/.png" alt="" width="180" />
    </Link>
    <Link href="#" variant="h5" color="inherit" underline="none" className={classes.linkBrandSmall}>
      <img src="mui-assets/img/logo-pied-piper-white-icon.png" alt="" width="32" />
    </Link>
    <Button color="inherit" className={classes.secondaryButton}>לאיזור האישי</Button>
    <Button variant="contained" color="secondary">לחיפוש</Button>
  </Toolbar>
  <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
    <div className={classes.drawerContainer}>
      <List>
        <ListItem button key="Features">
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Features" />
        </ListItem>
        <ListItem button key="Enterprise">
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Enterprise" />
        </ListItem>
        <ListItem button key="Support">
          <ListItemIcon>
            <LiveHelpIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
        <ListItem button key="ICO">
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="ICO" />
        </ListItem>
      </List>
    </div>
  </Drawer>
</AppBar>
  );
}