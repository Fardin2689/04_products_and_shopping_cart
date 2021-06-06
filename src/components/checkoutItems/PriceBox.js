import { Button } from '@material-ui/core';
import { Link, navigate } from '@reach/router';
import useApi from '../../hooks/useApi';
import productApi from '../../api/product';
import './style.css';

function PriceBox({ items, handleClearCart }) {
  const sendApi = useApi(productApi.buyProduct);

  let totalPrice = 0;
  let totalDiscount = 0;
  const order = [];
  for (let ind = 0; ind < items.length; ind++) {
    const { id, qty, price, discountP } = items[ind];
    order.push({ id, qty });
    totalPrice += price * qty;
    totalDiscount += price * (discountP / 100) * qty;
  }
  totalDiscount = Math.round(totalDiscount * 100) / 100;
  const totalDisP = Math.round((totalDiscount * 10000) / totalPrice) / 100;
  const finalPrice = totalPrice - totalDiscount;

  const handleBuy = async () => {
    const res = await sendApi.request(order);
    if (res.ok) {
      handleClearCart();
      await navigate('/');
    }
  };
  return (
    <div className="c_bill-box shadow">
      <div className="c_bill-price-box">
        <span className="c_bill-price-title">Total Price</span>
        <span className="c_bill-price-number">{`${totalPrice} $`}</span>
      </div>
      {totalDiscount !== 0 && (
        <div className="c_bill-price-box">
          <span className="c_bill-price-title">Total Discount</span>
          <span className="c_bill-price-number-discount">{`(${totalDisP}%) ${totalDiscount} $`}</span>
        </div>
      )}
      <div className="c_bill-price-box c_bill-total">
        <span className="c_bill-price-title">Final Price</span>
        <span className="c_bill-price-number">{`${finalPrice} $`}</span>
      </div>
      <div className="c_bt">
        <Button
          onClick={handleBuy}
          fullWidth
          color="primary"
          variant="contained"
        >
          Buy
        </Button>
      </div>
      <Link to="/" className="c_link">
        Continue Shopping
      </Link>
    </div>
  );
}

export default PriceBox;
