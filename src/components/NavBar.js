import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SignOutIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ProdAddIcon from '@material-ui/icons/PostAdd';
import { navigate } from '@reach/router';
import LoginDialog from './LoginDialog';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function PrimarySearchAppBar({ cart, loggedin, setLogedin }) {
  const classes = useStyles();
  const [openD, setOpenD] = useState(false);

  const orderNumber = cart.reduce((acc, curr) => (acc += curr.qty), 0);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => navigate('/')}
          >
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Products and Shopping Cart
          </Typography>

          <div className={classes.grow} />

          {loggedin && (
            <IconButton color="inherit" onClick={() => navigate('/admin')}>
              <DashboardIcon />
            </IconButton>
          )}
          <IconButton color="inherit" onClick={() => navigate('/add')}>
            <ProdAddIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate('/checkout')}>
            <Badge badgeContent={orderNumber} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            onClick={() => (loggedin ? setLogedin(false) : setOpenD(true))}
            color="inherit"
          >
            {loggedin ? <SignOutIcon /> : <AccountCircle />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <LoginDialog
        open={openD}
        handleLogin={() => setLogedin(true)}
        handleClose={() => setOpenD(false)}
      />
    </>
  );
}
