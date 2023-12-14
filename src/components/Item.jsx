import { Link } from "react-router-dom"



const Item = ({producto}) => {
    const { id, brand, category, model, year, price, img } = producto;

    return (
        <Link to={`/item/${id}`} className="tarjetita-producto">
            <img src={img} alt={brand} className="producto-img" />
            <h2 className="producto-titulo">Marca: {brand}</h2>
            <p className="producto-info">Modelo: {model}</p>
            <p className="producto-info">Año: {year}</p>
            <h3 className="producto-precio">Precio :{price}</h3>
            <h3>Pertenece a :{category}</h3>
             <button to={`/item/${id}`}  className="link-menu">Ver Comprar</button>
        </Link>
    )
}

export default Item