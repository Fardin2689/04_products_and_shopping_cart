import '../components/productItem/item.css';
function PriceBox({ item, children, details }) {
  const { title, aNumber, discountP, price, sNumber } = item;
  const finalPrice = price * ((100 - discountP) / 100);
  return (
    <div className="p_details">
      <div className="p_title">{title}</div>
      {details && (
        <>
          <div className="p_moreInfo"> Details: </div>
          <div className="p_status">{`Number of Sale: ${sNumber}`}</div>
        </>
      )}

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
      {children}
    </div>
  );
}

export default PriceBox;
