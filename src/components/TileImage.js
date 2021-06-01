import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  thumbWrapper: {
    height: '100px',
    width: '100px',
    minWidth: '100px',
    padding: '0.3rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    margin: '0 5px',
  },
  thumbOverlay: {
    backgroundColor: 'white',
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    transition: 'opacity 0.5s',
    '&:hover': {
      opacity: 0.7,
    },
  },
  thumbImage: {
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

const PostItem = ({ url, upload, handleDelGal }) => {
  const classes = useStyles();

  const handleDeleteImg = () => {
    handleDelGal(url);
  };
  return (
    <div className={classes.thumbWrapper}>
      <div
        onClick={() => (upload ? null : console.log('view -> ', url))}
        className={classes.thumbImage}
        style={{
          backgroundImage: `url(${url})`,
        }}
      >
        {upload && (
          <div className={classes.thumbOverlay}>
            <IconButton onClick={handleDeleteImg}>
              <DeleteIcon />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
