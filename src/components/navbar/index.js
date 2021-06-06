import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SignOutIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ProdAddIcon from '@material-ui/icons/PostAdd';
import { navigate } from '@reach/router';
import LoginDialog from '../LoginDialog';
import ShoppingCartPopperBt from './ShoppingCartPopperBt';

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

export default function NavBar({ cart, loggedin, setLogedin, handleDelItem }) {
  const classes = useStyles();
  const [openD, setOpenD] = useState(false);

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
          <ShoppingCartPopperBt items={cart} handleDelItem={handleDelItem} />

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
