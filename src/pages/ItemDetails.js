import { Button, Grid } from '@material-ui/core';
import PriceBox from '../components/PriceBox';
import './itemDetails.css';
const item = {
  id: 1,
  name: 'Brown Brim',
  imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
  imageUrl1: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
  imageUrl2: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
  imageUrl3: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
  imageUrl4: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
  price: 25,
};

const ThumbImage = ({ url }) => (
  <li className="gallery-item">
    <div
      className="thumb"
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
  </li>
);

function ItemDetails() {
  return (
    <div
      style={{
        display: 'felx',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <div className="title">
        This a new phone with new brand shiomi that can be not fh =
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} container justify="flex-end">
          <div
            className="shadow mainImage"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="info shadow">
            <ul className="gallery">
              <ThumbImage url={item.imageUrl1} />
              <ThumbImage url={item.imageUrl2} />
              <ThumbImage url={item.imageUrl3} />
              <ThumbImage url={item.imageUrl4} />
            </ul>
            <div style={{ flexGrow: 1 }}></div>
            <PriceBox />
            <Button fullWidth color="primary" variant="contained">
              Add to Cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemDetails;
