import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='tarjetita-producto'>
        <img src={item.img} alt={item.model} className='producto-img'/>
        <h2 className="producto-titulo">{item.brand}</h2>
            <p className="producto-info">{item.model}</p>
            <h3 className="producto-precio">{item.price}</h3>
      
    </div>
  )
}

export default ItemDetail
