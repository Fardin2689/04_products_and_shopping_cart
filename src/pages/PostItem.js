import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
// import { useSnackbar } from 'notistack';
// import { useNavigate } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import { Link, navigate } from '@reach/router';

import FormikForm from '../components/form/FormikForm';
import CTextField from '../components/form/CustomTextInput';
import { Box } from '@material-ui/core';
import TileImage from '../components/TileImage';
import MainImgPicker from '../components/form/MainImgPicker';
import GalleryImgPicker from '../components/form/GalleryImgPicker';
import { useState } from 'react';
import { imageResizer } from '../imageHelper';
import productApi from '../api/product';
import useApi from '../hooks/useApi';
import CuContainer from '../components/CuContainer';

const useStyles = makeStyles((theme) => ({
  galleryBox: {
    height: '130px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'auto',
    marginBottom: 8,
  },
}));

const Footer = () => (
  <Link to="/" className="c_link">
    Go to Shopping Page
  </Link>
);

const PostItem = () => {
  const classes = useStyles();
  const [mainImg, setMainImg] = useState(null);
  const [gallery, setGallery] = useState([]);
  const handleGallery = (file) => {
    imageResizer(file).then((uri) => {
      setGallery([
        ...gallery,
        { file, uri, preview: URL.createObjectURL(file) },
      ]);
    });
  };
  //   const navigate = useNavigate();
  //   const { enqueueSnackbar } = useSnackbar();
  const sendApi = useApi(productApi.addProduct);

  const initialValues = {
    title: '',
    aNumber: 1,
    price: '',
    discountP: 0,
  };
  const handleSubmit = async (values) => {
    console.log(values, mainImg, gallery);
    const res = await sendApi.request(values, mainImg, gallery);
    if (res.ok) navigate('/');
    //   return enqueueSnackbar(result.problem, {variant: 'error',});
    // else {
    //   enqueueSnackbar('User Created Successfully', { variant: 'success' });
    //   navigate(`signin/${values.email}`);
    // }
  };
  const handleDelGal = (url) => {
    setGallery(gallery.filter((item) => item.preview !== url));
    URL.revokeObjectURL(url);
  };
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, 'Must be 3 characters or more')
      .max(85, 'Must be 20 characters or less')
      .required('Required'),
    aNumber: Yup.number()
      .min(1, 'It should be at least 1')
      .max(1000, 'Must be 1000 or less')
      .required('Required'),
    price: Yup.number()
      .min(0, 'It should be at least 0')
      .max(1000000, 'Must be 1.000.000 or less')
      .required('Required'),
    discountP: Yup.number()
      .min(0, 'Must be between 0 and 100')
      .max(100, 'Must be between 0 and 100')
      .required('Required'),
    details: Yup.string(),
  });

  return (
    <CuContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={6}>
          <Box width="100%">
            <MainImgPicker setMainImg={setMainImg} />
            <div className={classes.galleryBox}>
              {gallery.map((item, ind) => (
                <TileImage
                  key={ind}
                  url={item.preview}
                  upload={true}
                  handleDelGal={handleDelGal}
                />
              ))}
              {gallery.length < 4 && mainImg && (
                <GalleryImgPicker handleGallery={handleGallery} />
              )}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={6}>
          <FormikForm
            initial={initialValues}
            validation={validationSchema}
            handleSubmit={handleSubmit}
            loading={false}
            disableBt={!mainImg}
            buttonTitle={'Add Product'}
            footer={<Footer />}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CTextField label="Title" name="title" type="text" />
              </Grid>
              <Grid item xs={12}>
                <CTextField
                  label="Available Number"
                  name="aNumber"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CTextField label="Price" name="price" type="number" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CTextField
                  label="Discount (Percent)"
                  name="discountP"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <CTextField
                  label="Details"
                  name="details"
                  type="text"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </FormikForm>
        </Grid>
      </Grid>
    </CuContainer>
  );
};

export default PostItem;
