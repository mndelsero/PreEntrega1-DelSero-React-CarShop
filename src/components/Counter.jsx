import { useState } from "react"


const Counter=()=>{
const [contador, setContador]=useState(0)




function sumar(){
    setContador(contador+1)
    
}

function restar(){
   contador>0 && setContador(contador-1)
}

    return(
    <div className="contador-productos">
      <p>Cuantos productos agregaras?

      </p>
      <p className="contador-mostrar">{contador}</p>
      <div className="btn-sctn">
      <button className="boton-contador" onClick={restar}>-</button>
        <button className="boton-contador" onClick={sumar}>+</button>

      </div>
        
    </div>
   )

}



export default  Counter