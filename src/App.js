import NavBar from './components/NavBar';
import { Router } from '@reach/router';
import ItemList from './components/ItemList';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar />
      <Router style={{ height: '100%' }}>
        <ItemList path="/" />
        <ItemDetails path="details" />
      </Router>
    </div>
  );
}

export default App;
