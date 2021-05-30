import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ItemList from './components/ItemList';
import ItemDetails from './pages/ItemDetails';
import CheckoutList from './pages/CheckoutList';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightgray',
      }}
    >
      <NavBar />
      <Router
        style={{
          width: '100%',
          height: '100%',
          padding: 10,
          maxWidth: 1300,
          margin: 'auto',
        }}
      >
        <ItemList path="shopping" />
        <ItemDetails path="details" />
        <CheckoutList path="checkout" />
      </Router>
    </div>
  );
}

export default App;
