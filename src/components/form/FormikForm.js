import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Formik, Form } from 'formik';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // height: '100%',
  },
  wrapper: {
    width: '100%',
    margin: theme.spacing(3, 0, 2),
    position: 'relative',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const FormikForm = ({
  initial,
  validation,
  handleSubmit,
  loading,
  buttonTitle,
  children,
  footer,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={initial}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Form className={classes.form}>
        {children}
        {/* <div style={{ flexGrow: 1 }} /> */}
        <div className={classes.wrapper}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={loading || props.disableBt}
          >
            {buttonTitle}
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
        {footer}
      </Form>
    </Formik>
  );
};

export default FormikForm;
