
import shoppingCartImage from './img/shopping-cart.png';

import React from 'react'

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      Carrito 
      
      <img src={shoppingCartImage} alt="" className='cart-img'/>
      <span> 0</span>
      
      
    </div>
  )
}

export default CartWidget
