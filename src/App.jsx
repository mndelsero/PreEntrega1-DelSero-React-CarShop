import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/pages/Nosotros';
import Inicio from './components/pages/Inicio';
import Cart from './components/pages/Cart'
import Footer from './components/Footer';
import {  CartProvider } from './components/context/CartContext';
import Checkout from './components/pages/Checkout';

function App() {

  return (
    <div className='app' >
<CartProvider>
      <BrowserRouter>
        <Navbar />

<Routes>
<Route path="/"  element={<Inicio/>}/>
<Route path="/productos/:category"  element={<ItemListContainer/>}/>
<Route path="/productos"  element={<ItemListContainer/>}/>
<Route path="/item/:id"  element={<ItemDetailContainer />}/>
<Route path="/nosotros"  element={<Nosotros/>}/>
<Route path="/carrito"  element={<Cart/>}/>
<Route path="/checkout"element={<Checkout/>}/>
</Routes>
     
    <Footer/>     
          



      </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}

export default App
