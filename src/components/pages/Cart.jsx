import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className='carrito'>
      <h2>Carrito</h2>
      {carrito.length > 0 ?
        <>
          <div className='tu-compra'>
            <h3>Has Comprado:  </h3>
            <div className='cart-prods'>
              {carrito.map((prod) => (
                <div key={prod.id} className='cart-prod'>
                  <h4>{prod.brand} {prod.model}</h4>
                  <p>Cant: {prod.cantidad}</p>
                  <h5>${prod.price * prod.cantidad}</h5>
                  <p className="detail-info">Tipo de Categoria: {prod.category}</p>
                  <button className='eliminar'>Eliminar</button>
                </div>
              ))}
            </div>

          </div>
          <div className='suma-total'>Precio Total: $USD {precioTotal()}</div>
          <button className='vaciar' onClick={handleVaciar}>Vaciar Carrito</button>
          <Link to="/checkout" className='finalizar'>Finalizar Compra</Link>
        </> :
         <>
        <h4 className='carrito-vacio'>El Carrito esta Vacio!!</h4>
        <Link to="/productos" className='volver'>Ir a Comprar</Link>
        </>
      }
    </div>
  )
}

export default Cart
