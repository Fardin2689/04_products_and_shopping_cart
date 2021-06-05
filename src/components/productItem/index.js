import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';
import noImage from '../../asset/notLoading.png';
import PriceBox from '../PriceBox';
import './item.css';
import useApi from '../../hooks/useApi';
import productApi from '../../api/product';

export default function Item({ item, adminPanel, addToCart, deleteItem }) {
  const { id, aNumber, mainThumb } = item;
  const delApi = useApi(productApi.deleteProduct);
  const handleDeleteItem = async () => {
    const res = await delApi.request(id);
    if (res.ok) deleteItem(id);
  };
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
            <Button className="p_bt" onClick={handleDeleteItem}>
              Delete
            </Button>
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
