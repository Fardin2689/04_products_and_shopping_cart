import { Router } from '@reach/router';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetails from './pages/ItemDetails';
import CheckoutList from './pages/CheckoutList';
import Home from './pages/Home';
import PostItem from './pages/PostItem';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#f5f5f5',
      }}
    >
      <NavBar />
      <Container
        component="main"
        maxWidth="lg"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Router
          style={{
            width: '100%',
            height: '100%',
            // padding: 10,
          }}
        >
          <Home path="/" />
          <ItemList path="shopping" />
          <ItemDetails path="details" />
          <CheckoutList path="checkout" />
          <PostItem path="add" />
        </Router>
      </Container>
    </div>
  );
}

export default App;
