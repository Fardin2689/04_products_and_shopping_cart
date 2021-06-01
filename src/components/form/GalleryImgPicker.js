import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import addPic from '../../asset/addPic.png';

const useStyles = makeStyles((theme) => ({
  thumbWrapper: {
    height: '100px',
    width: '100px',
    minWidth: '100px',
    padding: '0.3rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: theme.palette.primary.light,
    margin: '0 5px',
  },
  dropZone: {
    height: '100%',
    width: '100%',
  },
  thumbImage: {
    height: '100%',
    width: '100%',
    borderRadius: '8px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
}));

const GalleryImgPicker = ({ handleGallery }) => {
  const classes = useStyles();

  const onDrop = (acceptedFiles) => {
    handleGallery(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    multiple: false,
    // validator: imageValidator,
    onDropAccepted: onDrop,
    noKeyboard: true,
  });

  return (
    <div className={classes.thumbWrapper}>
      <div {...getRootProps({ className: classes.dropZone })}>
        <input {...getInputProps()} />
        <div
          className={classes.thumbImage}
          style={{ backgroundImage: `url(${addPic})` }}
        />
      </div>
    </div>
  );
};

export default GalleryImgPicker;
