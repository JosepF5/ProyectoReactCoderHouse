import {BrowserRouter,Routes,Route} from 'react-router-dom'
import "./styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider  from './context/CartContext';
function App() {
  const initial=1
  const max=10
  return (
    <CartContextProvider>
      <BrowserRouter>
      <div className="App">
          <NavBar/>
          <Routes>
            <Route
              exact 
              path="/" 
              element={ <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>} 
            />
           <Route 
              exact
              path="/categoria/:idCategoria" 
              element={ <ItemListContainer greeting='Al aire! Bienvenidos a nuestra tienda '/>} 
            />
            <Route 
              exact
              path="/detalle/:id"
              element={<ItemDetailContainer />}
            />
            <Route 
              exact 
              path="/cart"
              element={<Cart />} />
          </Routes>
      </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
