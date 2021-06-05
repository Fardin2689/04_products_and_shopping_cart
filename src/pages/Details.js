import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid } from '@material-ui/core';
import { Link } from '@reach/router';

import TileImage from '../components/TileImage';
import productApi from '../api/product';
import useApi from '../hooks/useApi';
import PriceBox from '../components/PriceBox';
import CuContainer from '../components/CuContainer';

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

const Details = ({ id, addToCart }) => {
  const classes = useStyles();
  const [prod, setProd] = useState(null);
  const sendApi = useApi(productApi.getProductById);

  const getProduct = async () => {
    const res = await sendApi.request(id);
    if (res.ok) setProd({ ...res.data, view: res.data.mainThumb });
  };
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  const handleView = (url) => {
    setProd({ ...prod, view: url });
  };

  if (prod === null) return null;
  const { mainThumb, view, aNumber, thumb1, thumb2, thumb3, thumb4 } = prod;
  const gallery = [thumb1, thumb2, thumb3, thumb4];
  return (
    <CuContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7} md={6}>
          <Box width="100%">
            <div
              className={classes.mainImage}
              style={{ backgroundImage: `url(${view})` }}
            />
            <div className={classes.galleryBox}>
              <TileImage
                url={mainThumb}
                upload={false}
                handleView={handleView}
              />
              {gallery.map((item, ind) => {
                return item === null ? null : (
                  <TileImage
                    key={ind}
                    url={item}
                    upload={false}
                    handleView={handleView}
                  />
                );
              })}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={6}>
          <PriceBox item={prod} details={true}>
            <Button
              style={{ marginTop: '1rem' }}
              disabled={aNumber === 0}
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => addToCart(prod)}
            >
              Add to Cart
            </Button>
            <Link to="/" className="c_link">
              Continue Shopping
            </Link>
          </PriceBox>
        </Grid>
      </Grid>
    </CuContainer>
  );
};

export default Details;
