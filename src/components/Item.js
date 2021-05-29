import { Button } from '@material-ui/core';
import './item.css';

function Item({ item }) {
  return (
    <div className="container">
      <div className="image-cover">
        <div
          className="image"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
      </div>

      <div className="details">
        <div className="title">
          This is a new brand lap top with 6 MB ram and Cpu core i7 and 700 GB
          hdd. also there is no other special tools
        </div>
        <div className="status">Available in store: 5</div>
        <div className="price-box">
          <div className="price-discount-box">
            <div className="discount-oval">5%</div>
            <del className="price-del">700 $</del>
          </div>
          <div className="price"> 547 $</div>
        </div>
      </div>
      <div className="action">
        <Button className="bt">Delete</Button>
        <Button className="bt">Edit</Button>
      </div>
    </div>
  );
}

export default Item;
