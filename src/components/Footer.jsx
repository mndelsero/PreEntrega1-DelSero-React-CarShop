import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='siguenos'>
        <h4>Siguenos</h4>
<a href="" className='link-menu'>mndelsero@gmail.com</a>
<a href="" className='link-menu'>+54 261 5798586</a>
        </div>
        <div>
            <h4>Indice</h4>
            <Link className='link-menu' to="/">Inicio</Link>
            <Link className='link-menu' to="/productos">Productos</Link>
            <Link className='link-menu' to="/productos/Sedanes">Sedanes</Link>
            <Link className='link-menu' to="/productos/Deportivos">Deportivos</Link>
            <Link className='link-menu' to="/productos/Camionetas">Camionetas</Link>
            <Link className='link-menu' to="/nosotros">Nosotros</Link>
            <Link className='link-menu' to="/carrito">Carrito</Link>
        
        </div>




      
    </div>
  )
}

export default Footer
