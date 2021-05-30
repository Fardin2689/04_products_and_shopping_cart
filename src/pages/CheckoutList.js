import { Box, Button, Card, Grid, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
function ShoppingList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <div className="checkout-item-box shadow">
          <div className="checkout-item">
            {/* <Grid container spacing={2}> */}
            <div className="checkout-thumb-wrapper">
              <div style={{ backgroundImage: `url(${item.imageUrl})` }} />
            </div>
            <div className="checkout-detail">
              <div className="checkout-item-title ">
                New Brand of iPhone 12 that can be found every where but you can
                not find it
              </div>
              <Box display={{ xs: 'none', md: 'block' }}>
                <div className="checkout-available-number">
                  Available Number in Store: 5
                </div>
                <div className="checkout-discount"> Discount 20 $</div>
                <div className="checkout-action">
                  <div className="checkout-quantity">
                    <button>+</button>
                    <div className="checkout-quantity-number">2</div>
                    <button>-</button>
                  </div>
                  <IconButton style={{ marginLeft: 10 }}>
                    <DeleteIcon />
                  </IconButton>
                  Delete
                  <div className="checkout-price">5248 $</div>
                </div>
              </Box>
            </div>
            {/* </Grid> */}
          </div>
          <Box display={{ xs: 'block', md: 'none' }}>
            <div className="checkout-available-number">
              Available Number in Store: 5
            </div>
            <div className="checkout-discount"> Discount 20 $</div>
            <div className="checkout-action">
              <div className="checkout-quantity">
                <button>+</button>
                <div className="checkout-quantity-number">2</div>
                <button>-</button>
              </div>
              <IconButton style={{ marginLeft: 10 }}>
                <DeleteIcon />
              </IconButton>
              Delete
              <div className="checkout-price">5248 $</div>
            </div>
          </Box>
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className="checkout-bill-box shadow">
          <div className="checkout-bill-price-box">
            <span className="checkout-bill-price-title">Total Price</span>
            <span className="checkout-bill-price-number">125.8 $</span>
          </div>
          <div className="checkout-bill-price-box">
            <span className="checkout-bill-price-title">Total Discount</span>
            <span className="checkout-bill-price-number-discount">
              (5%) 24 $
            </span>
          </div>
          <div className="checkout-bill-price-box bill-total">
            <span className="checkout-bill-price-title">Total Price</span>
            <span className="checkout-bill-price-number">125.8 $</span>
          </div>
          <div className="checkout-bt">
            <Button fullWidth color="primary" variant="contained">
              Continue Shopping
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ShoppingList;
