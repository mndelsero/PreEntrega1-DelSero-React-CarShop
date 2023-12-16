import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className='tarjetita-detail'>
      <div className='intro-sctn'>
      <h2 className="detail-titulo">Marca: {item.brand}</h2>
        <img src={item.img} alt={item.model} className='detail-img'/>
      </div>
     
        <div className='info-sctn'>
        <p className="detail-info">Modelo: {item.model}</p>
            <p className="detail-info">Año: {item.year}</p>
            <h3 className="detail-precio">Precio: {item.price}</h3>
            <button className='detail-btn'>Agregar</button>

        </div>
          
      
    </div>
  )
}

export default ItemDetail
