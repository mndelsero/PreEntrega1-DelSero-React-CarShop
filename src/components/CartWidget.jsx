
import shoppingCartImage from '../assets/shopping-cart.png';

import React, { useContext } from 'react'
import { CartContext } from './context/CartContext';

const CartWidget = ({}) => {
const{cantidadEnCarrito}=useContext(CartContext);

  return (
    <div className='cart-widget'>
     
      
      <img src={shoppingCartImage} alt="" className='cart-img' /> 
      <span className="cart-span"> {cantidadEnCarrito()}</span>
      
      
    </div>
  )
}

export default CartWidget
