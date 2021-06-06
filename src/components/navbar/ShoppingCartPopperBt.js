import React, { useState, useRef, useCallback } from 'react';
import {
  Popover,
  IconButton,
  AppBar,
  List,
  Divider,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Badge,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartListItem from './CartListItem';

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    overflowY: 'auto',
    maxHeight: 350,
  },
  popoverPaper: {
    width: '100%',
    maxWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 270,
    },
  },
  divider: {
    marginTop: -2,
  },
  noShadow: {
    boxShadow: 'none !important',
  },
  action: {
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default function ShoppingCartPopperBt({ items, handleDelItem }) {
  const classes = useStyles();
  const anchorEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleClickAway = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleNavigate = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  const orderNumber = items.reduce((acc, curr) => (acc += curr.qty), 0);
  const totalPrice = items.reduce((acc, curr) => {
    acc += curr.price * curr.qty * ((100 - curr.discountP) / 100);
    return Math.round(acc * 100) / 100;
  }, 0);
  const id = isOpen ? 'scroll-playground' : null;
  return (
    <>
      <IconButton onClick={handleClick} buttonRef={anchorEl} color="inherit">
        <Badge badgeContent={orderNumber} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Popover
        disableScrollLock
        id={id}
        open={isOpen}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        classes={{ paper: classes.popoverPaper }}
        onClose={handleClickAway}
      >
        <AppBar position="static" color="inherit" className={classes.noShadow}>
          <Box pt={1} pl={2} pb={1} pr={1}>
            <Typography variant="subtitle1">Shopping Items</Typography>
          </Box>
          <Divider className={classes.divider} />
        </AppBar>
        <List dense className={classes.tabContainer}>
          {items.length === 0 ? (
            <ListItem>
              <ListItemText>You haven&apos;t added any items yet.</ListItemText>
            </ListItem>
          ) : (
            items.map((el, ind) => (
              <CartListItem
                key={el.id}
                data={el}
                divider={ind !== items.length - 1}
                handleDelItem={handleDelItem}
              />
            ))
          )}
        </List>
        {items.length !== 0 && (
          <>
            <Divider className={classes.divider} />
            <div className={classes.action}>
              <div>{`Total aprice: ${totalPrice} $`}</div>
              <Button
                color="primary"
                variant="contained"
                onClick={handleNavigate}
              >
                Continue
              </Button>
            </div>
          </>
        )}
      </Popover>
    </>
  );
}
