import { Link } from "react-router-dom"



const Item = ({producto}) => {
    // const { id, brand, category,category_name, model, title, price, image } = producto;
  

    return (
        <Link to={`/item/${producto.id}`} className="tarjetita-producto">
             <h3 className="producto-titulo">{producto.brand} {producto.model}</h3>
            <img src={producto.img} alt={producto.brand} className="producto-img" />
            <h3 className="producto-titulo">Marca: {producto.brand}</h3>
            <p className="producto-info">Modelo: {producto.model}</p>
            
            <h3 className="producto-precio">Precio :{producto.price}</h3>
            <h3>Pertenece a :{producto.category}</h3>
             <button to={`/item/${producto.id}`}  className="tarjetita-btn">Ver Comprar</button>
        </Link>
    )
}

export default Item