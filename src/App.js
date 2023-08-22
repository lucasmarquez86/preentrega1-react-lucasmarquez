import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <ItemListContainer greeting={'Bienvenidos a la Tienda Oficial de Somos Locales'}/>
    </div>
  );
}

export default App;
