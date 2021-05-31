import { Button } from '@material-ui/core';
import './style.css';
function PriceBox({ totalPrice, totalDiscount, finalPrice }) {
  return (
    <>
      <div className="c_bill-box shadow">
        <div className="c_bill-price-box">
          <span className="c_bill-price-title">Total Price</span>
          <span className="c_bill-price-number">{`${totalPrice} $`}</span>
        </div>
        <div className="c_bill-price-box">
          <span className="c_bill-price-title">Total Discount</span>
          <span className="c_bill-price-number-discount">{`${totalDiscount} $`}</span>
        </div>
        <div className="c_bill-price-box c_bill-total">
          <span className="c_bill-price-title">Final Price</span>
          <span className="c_bill-price-number">{`${finalPrice} $`}</span>
        </div>
        <div className="c_bt">
          <Button fullWidth color="primary" variant="contained">
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  );
}

export default PriceBox;
