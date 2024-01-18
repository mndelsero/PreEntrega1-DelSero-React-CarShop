import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext';

const ItemDetail = ({ item }) => {
  // const { id, brand, category, category_name, model, title, price, image, description, stock } = item;
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito)
  const [cantidad, setCantidad] = useState(1);
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  }
  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  }

  return (
    <div className='tarjetita-detail'>
      <div className='intro-sctn'>
        <h2 className="detail-titulo">{item.brand} {item.model}</h2>
        <img src={item.img} alt={item.model} className='detail-img' />
      </div>

      <div className='info-sctn'>
        <p className="detail-info">Modelo: {item.model}</p>
        <p className="detail-info">Marca: {item.brand}</p>
        <p className="detail-info">Tipo de Categoria: {item.category}</p>
        <p className="detail-info">Stock actual: {item.stock}</p>
        <h3 className="detail-precio">Precio: ${item.price} USD</h3>
        <p className='detail-desc'>{item.description}</p>

        <ItemCount
          cantidad={cantidad}
          handleRestar={handleRestar}
          handleSumar={handleSumar}
          handleAgregar={() => { agregarAlCarrito(item, cantidad, setCantidad) }} />
      </div>
    </div>
  )
}

export default ItemDetail
