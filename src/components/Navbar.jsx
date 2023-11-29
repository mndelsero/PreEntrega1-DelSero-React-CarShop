import CartWidget from "./CartWidget"
import logo from "./img/Fansly-Logo.png"



const Navbar=()=>{

    return(
<div >
    
    <ul className="navbar">
    <img src={logo} alt="" className="img-logo" />
    <li><a className="link-menu" href="">Inicio</a></li>
        <li><a className="link-menu" href="">Productos</a></li>
        <li><a className="link-menu" href="">Sedanes</a></li>
        <li><a className="link-menu" href="">Deportivos</a></li>
        <li><a className="link-menu" href=""><CartWidget/></a>
            </li>

    </ul>
       
</div>
    )

}
export default Navbar