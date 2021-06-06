import { Box, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';

function CItem({ item, handleAddQty, handleRemQty, handleDelItem }) {
  const { id, title, price, aNumber, discountP, mainThumb, qty } = item;
  const discount = Math.round(price * (discountP / 100) * qty * 100) / 100;
  const detailsBox = (
    <>
      <div className="c_available-number">{`Available Number in Store: ${aNumber}`}</div>
      {discountP !== 0 && (
        <div className="c_discount">{`Discount ${discount} $`}</div>
      )}
      <div className="c_action">
        <div className="c_quantity">
          <Button disabled={qty === aNumber} onClick={() => handleAddQty(id)}>
            +
          </Button>
          <div className="c_quantity-number">{qty}</div>
          <Button disabled={qty === 1} onClick={() => handleRemQty(id)}>
            -
          </Button>
        </div>
        <IconButton
          style={{ marginLeft: 10 }}
          onClick={() => handleDelItem(id)}
        >
          <DeleteIcon />
        </IconButton>
        Delete
        <div className="c_price">{`${price - discount} $`}</div>
      </div>
    </>
  );

  return (
    <div className="c_item-box">
      <div className="c_item">
        <div className="c_thumb-wrapper">
          <div style={{ backgroundImage: `url(${mainThumb})` }} />
        </div>
        <div className="c_detail">
          <div className="c_item-title ">{title}</div>
          <Box display={{ xs: 'none', md: 'block' }}>{detailsBox}</Box>
        </div>
      </div>
      <Box display={{ xs: 'block', md: 'none' }}>{detailsBox}</Box>
    </div>
  );
}

export default CItem;
