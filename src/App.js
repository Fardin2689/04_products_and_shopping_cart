import { Router } from '@reach/router';
import NavBar from './components/navbar/index';
import Details from './pages/Details';
import Checkout from './pages/CheckoutList';
import Home from './pages/Home';
import PostItem from './pages/PostItem';
import { Container } from '@material-ui/core';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [loggedin, setLogedin] = useState(false);

  const addToCart = (item) => {
    const find = cart.find((el) => el.id === item.id);
    if (find) {
      const newCart = cart.map((el) => {
        if (el.id === item.id) {
          return { ...el, qty: el.aNumber > el.qty ? el.qty + 1 : el.qty };
        } else return el;
      });
      setCart(newCart);
    } else setCart([...cart, { ...item, qty: 1 }]);
  };

  const handleDelItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleAddQty = (id) => {
    const newCart = cart.map((el) => {
      if (el.id === id) {
        return { ...el, qty: el.qty + 1 };
      } else return el;
    });
    setCart(newCart);
  };

  const handleRemQty = (id) => {
    const newCart = cart.map((el) => {
      if (el.id === id) {
        return { ...el, qty: el.qty - 1 };
      } else return el;
    });
    setCart(newCart);
  };

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <NavBar
        cart={cart}
        loggedin={loggedin}
        setLogedin={setLogedin}
        handleDelItem={handleDelItem}
      />
      <Container component="main" maxWidth="lg">
        <Router>
          <Home path="/*from" addToCart={addToCart} loggedin={loggedin} />
          <Details path="details/:id" addToCart={addToCart} />
          <Checkout
            path="checkout"
            cart={cart}
            handleAddQty={handleAddQty}
            handleRemQty={handleRemQty}
            handleDelItem={handleDelItem}
            handleClearCart={handleClearCart}
          />
          <PostItem path="add" />
        </Router>
      </Container>
    </div>
  );
}

export default App;
