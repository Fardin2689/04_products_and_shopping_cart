import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.warning.light,
    border: `2px solid ${theme.palette.warning.main}`,
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    marginTop: theme.spacing(2),
  },
}));

export default function LoginDialog({ open, handleClose, handleLogin }) {
  const classes = useStyles();
  const [form, setForm] = useState({ userName: '', password: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleLoginBt = () => {
    if (form.userName === 'admin' && form.password === 'admin') {
      handleLogin();
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          variant="outlined"
          id="userName"
          label="User Name"
          type="text"
          fullWidth
          onChange={handleChange}
          value={form.userName}
          style={{ marginBottom: 15 }}
        />
        <TextField
          variant="outlined"
          id="password"
          label="Password"
          type="password"
          fullWidth
          onChange={handleChange}
          value={form.password}
        />

        <div className={classes.main}>
          <Typography variant="body2">
            Note: This is an uncontrolled form just for demo. <br /> <br />
            User Name is: <b>admin</b>
            <br />
            Password is: <b>admin</b>
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleLoginBt} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
}
