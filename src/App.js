import ItemList from './components/ItemList';
import NavBar from './components/NavBar';
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
      <ItemList />
    </div>
  );
}

export default App;
