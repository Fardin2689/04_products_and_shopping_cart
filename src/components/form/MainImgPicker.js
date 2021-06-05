import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDropzone } from 'react-dropzone';
import addPic from '../../asset/addPic.png';
import { imageResizer } from '../../imageHelper';

const useStyles = makeStyles((theme) => ({
  mainImage: {
    height: '400px',
    width: '100%',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    boxShadow: `0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)`,
    [theme.breakpoints.down('sm')]: {
      height: '300px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '200px',
    },
  },
}));

const MainImgPicker = ({ setMainImg }) => {
  const classes = useStyles();
  const [img, setImg] = useState(null);
  const onDrop = (acceptedFiles) => {
    const blob = URL.createObjectURL(acceptedFiles[0]);
    setImg(blob);

    imageResizer(acceptedFiles[0]).then((uri) => {
      setMainImg({ file: acceptedFiles[0], uri });
    });

    setMainImg(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    multiple: false,
    // validator: imageValidator,
    onDropAccepted: onDrop,
    noKeyboard: true,
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(img);
    },
    [img]
  );

  return (
    <div style={{ padding: 8, cursor: 'pointer' }}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div
          className={classes.mainImage}
          style={{ backgroundImage: `url(${img ? img : addPic})` }}
        />
      </div>
    </div>
  );
};

export default MainImgPicker;
