import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Cart from './components/Cart';

function App() {



  return (
    <div >
      <BrowserRouter>
        <Navbar />

<Routes>
<Route path="/"  element={<ItemListContainer/>}/>
<Route path="/productos/:category"  element={<ItemListContainer/>}/>
<Route path="/productos"  element={<ItemListContainer/>}/>
<Route path="/item/:id"  element={<ItemDetailContainer />}/>
<Route path="/nosotros"  element={<Nosotros/>}/>
<Route path="/carrito"  element={<Cart/>}/>

</Routes>
     
         
          



      </BrowserRouter>
    </div>
  )
}

export default App
