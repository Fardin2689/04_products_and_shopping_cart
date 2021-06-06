import { Card } from '@material-ui/core';
import { Link } from '@reach/router';
import emptyCart from '../../asset/empty.png';

function EmptyCart() {
  return (
    <Card style={{ maxWidth: 900, margin: '1rem auto' }}>
      <div
        style={{
          background: `url(${emptyCart}) 50% no-repeat`,
          margin: '0 auto',
          width: '200px',
          height: '150px',
          backgroundSize: 'contain',
        }}
      ></div>
      <p
        style={{
          fontSize: '1.286rem',
          lineHeight: '31px',
          color: '#424750',
          textAlign: 'center',
          margin: '4px auto 12px',
        }}
      >
        Your Shopping List is Empty.
      </p>
      <div
        style={{
          textAlign: 'center',
          margin: '4px auto 12px',
        }}
      >
        <Link to="/">Go to Shopping Page</Link>
      </div>
    </Card>
  );
}

export default EmptyCart;
