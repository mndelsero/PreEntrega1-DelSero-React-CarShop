import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/pages/Nosotros';
import Inicio from './components/pages/Inicio';
import Cart from './components/pages/Cart'
import Footer from './components/Footer';

function App() {



  return (
    <div >
      <BrowserRouter>
        <Navbar />

<Routes>
<Route path="/"  element={<Inicio/>}/>
<Route path="/productos/:category"  element={<ItemListContainer/>}/>
<Route path="/productos"  element={<ItemListContainer/>}/>
<Route path="/item/:id"  element={<ItemDetailContainer />}/>
<Route path="/nosotros"  element={<Nosotros/>}/>
<Route path="/carrito"  element={<Cart/>}/>

</Routes>
     
    <Footer/>     
          



      </BrowserRouter>
    </div>
  )
}

export default App
