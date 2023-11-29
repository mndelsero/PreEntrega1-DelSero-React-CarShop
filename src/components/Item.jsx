


const Item = ({producto}) => {


    return (
        <div className="tarjetita-producto">
            <img src={producto.img} alt={producto.brand} className="producto-img" />
            <h2 className="producto-titulo">{producto.brand}</h2>
            <p className="producto-info">{producto.model}</p>
            <h3 className="producto-precio">{producto.price}</h3>
            <button className="btn btn-success" type="button"> Ver Mas/Comprar</button>
        </div>
    )
}

export default Item