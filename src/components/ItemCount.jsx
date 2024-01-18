
const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {
   

    return (
        <div className='item-count-container'>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className='detail-btn' onClick={handleAgregar}>Agregar</button>

        </div>
    )
}

export default ItemCount
