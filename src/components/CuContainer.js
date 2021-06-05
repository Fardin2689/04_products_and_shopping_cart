import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: 960,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 800,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1),
    },
  },
}));

const C_Container = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default C_Container;
