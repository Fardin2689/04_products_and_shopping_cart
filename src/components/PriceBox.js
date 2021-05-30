import './item.css';
function PriceBox(props) {
  return (
    <div className="price-status-box">
      <div className="status">Available in store: 5</div>
      <div className="price-box">
        <div className="price-discount-box">
          <div className="discount-oval">5%</div>
          <del className="price-del">700 $</del>
        </div>
        <div className="price"> 547 $</div>
      </div>
    </div>
  );
}

export default PriceBox;
