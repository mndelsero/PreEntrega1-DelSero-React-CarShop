import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Contacto from '../Contacto';

const Nosotros = () => {
  return (
    <div className='nosotros'>
      <h2> Acerca de Nosotros</h2>
<div className='nos-cont'>
<div className='acerca-de'>

<h2>Más de 40 años de historia  </h2>
<p>Yacopini cuenta con una larga trayectoria y arraigo en todo cuyo. Ganamos 3 Premios “Club del Presidente” como mejor concesionario del país y contamos con Certificación de calidad TÜV.
</p>
<p>Para nosotros en esta tienda, lo mas importante es que puedas conseguir el mejor auto de segunda que podras encontrar en el Mercado, <br />
  Nos aseguramos personalmente del estado de nuestros productos y de como llegan a nuestro galpon </p>
</div>

<div className='nos-redes'>
<h4>Nuestras Redes, forma parte del grupo NewCars!!</h4>

<div className='redes'>
  <a href="" className="logo"><FontAwesomeIcon icon={faFacebook} /></a>
  <a href="" className='logo'><FontAwesomeIcon icon={faInstagram}  /></a>
  <a href="" className='logo'><FontAwesomeIcon icon={faEnvelope} /></a>
  <a href="" className='logo'><FontAwesomeIcon icon={faWhatsapp} /></a>
</div>
</div>



</div>
<Contacto/>
     
    </div>
  )
}

export default Nosotros
