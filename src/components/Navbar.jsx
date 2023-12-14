import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import logo from "../assets/Fansly-Logo.png"



const Navbar=()=>{

    return(
<div >
    
    <ul className="navbar">
   <li><Link to="/"><img src={logo} alt="" className="img-logo" /></Link></li> 
   
        <li><Link className="link-menu" to="/productos">Productos</Link></li>
        <li><Link className="link-menu" to="/productos/Sedanes">Sedanes</Link></li>
        <li><Link className="link-menu" to="/productos/Deportivos">Deportivos</Link></li>
        <li><Link className="link-menu" to="/productos/Camionetas">Camionetas</Link></li>
        <li><Link className="link-menu" to="/nosotros">Nosotros</Link></li>
        <li><Link className="link-menu" to="/carrito"><CartWidget/></Link>
            </li>

    </ul>
       
</div>
    )

}
export default Navbar