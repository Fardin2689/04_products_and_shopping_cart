import { Button } from '@material-ui/core';
import noImage from '../../asset/notLoading.png';
import './item.css';

export default function Item({ item, adminPanel }) {
  const { id, imageUrl, title, aNumber, discountP, price } = item;
  const finalPrice = price * ((100 - discountP) / 100);
  return (
    <div className="p_container">
      <div className="p_item-cover" onClick={() => console.log(id)}>
        {aNumber === 0 && <div className="p_item-overlay"></div>}
        <div className="p_image-cover">
          <div
            className="p_image"
            style={{ backgroundImage: `url(${noImage})` }}
          />
          <div
            className="p_image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
        <div className="p_details">
          <div className="p_title">{title}</div>
          <div className="p_status">{`Available in store: ${aNumber}`}</div>
          <div className="p_price-box">
            {discountP !== 0 && (
              <div className="p_price-discount-box">
                <div className="p_discount-oval">{`${discountP}%`}</div>
                <del className="p_price-del">{`${price} $`}</del>
              </div>
            )}

            <div className="p_price">{`${
              Math.round(finalPrice * 100) / 100
            } $`}</div>
          </div>
        </div>
      </div>
      <div className="p_action">
        {adminPanel ? (
          <>
            <Button className="p_bt">Delete</Button>
            <Button className="p_bt">Edit</Button>
          </>
        ) : (
          <Button disabled={aNumber === 0} className="p_bt">
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
