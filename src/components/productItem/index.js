import { Button } from '@material-ui/core';
import { useNavigate } from '@reach/router';
import noImage from '../../asset/notLoading.png';
import PriceBox from '../PriceBox';
import './item.css';

export default function Item({ item, adminPanel, addToCart }) {
  const navigate = useNavigate();
  const { id, aNumber, mainThumb } = item;
  return (
    <div className="p_container">
      <div className="p_item-cover" onClick={() => navigate(`details/${id}`)}>
        {aNumber === 0 && <div className="p_item-overlay"></div>}
        <div className="p_image-cover">
          <div
            className="p_image"
            style={{ backgroundImage: `url(${noImage})` }}
          />
          <div
            className="p_image"
            style={{ backgroundImage: `url(${mainThumb})` }}
          />
        </div>
        <PriceBox item={item} />
      </div>
      <div className="p_action">
        {adminPanel ? (
          <>
            <Button className="p_bt">Delete</Button>
            <Button className="p_bt">Edit</Button>
          </>
        ) : (
          <Button
            color="primary"
            disabled={aNumber === 0}
            className="p_bt"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
