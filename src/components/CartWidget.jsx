
import shoppingCartImage from '../assets/shopping-cart.png';

import React from 'react'

const CartWidget = () => {
  return (
    <div className='cart-widget'>
     
      
      <img src={shoppingCartImage} alt="" className='cart-img'/>
      <span className="cart-span"> 0</span>
      
      
    </div>
  )
}

export default CartWidget
