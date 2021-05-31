import { Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';

function CItem({ item, orderNumber, totalDiscount, finalPrice }) {
  const { imageUrl, title, aNumber } = item;
  const detailsBox = (
    <>
      <div className="c_available-number">{`Available Number in Store: ${aNumber}`}</div>
      <div className="c_discount">{`Discount ${totalDiscount} $`}</div>
      <div className="c_action">
        <div className="c_quantity">
          <button>+</button>
          <div className="c_quantity-number">{orderNumber}</div>
          <button>-</button>
        </div>
        <IconButton style={{ marginLeft: 10 }}>
          <DeleteIcon />
        </IconButton>
        Delete
        <div className="c_price">{`${finalPrice} $`}</div>
      </div>
    </>
  );

  return (
    <div className="c_item-box shadow">
      <div className="c_item">
        <div className="c_thumb-wrapper">
          <div style={{ backgroundImage: `url(${imageUrl})` }} />
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
