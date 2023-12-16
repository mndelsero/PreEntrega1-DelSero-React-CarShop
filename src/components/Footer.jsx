import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='siguenos'>
        <h4>Siguenos</h4>
<a href="" className='link-foot'>mndelsero@gmail.com</a>
<a href="" className='link-foot'>+54 261 5798586</a>
        </div>
        <div className='indice'>
            <h4>Indice</h4>
            <Link className='link-foot' to="/">Inicio</Link>
            <Link className='link-foot' to="/productos">Productos</Link>
            <Link className='link-foot' to="/productos/Sedanes">Sedanes</Link>
            <Link className='link-foot' to="/productos/Deportivos">Deportivos</Link>
            <Link className='link-foot' to="/productos/Camionetas">Camionetas</Link>
            <Link className='link-foot' to="/nosotros">Nosotros</Link>
            <Link className='link-foot' to="/carrito">Carrito</Link>
        
        </div>




      
    </div>
  )
}

export default Footer
