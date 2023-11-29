import { useState } from "react"



const Text=()=>{
const [texto, setText]=useState(true)

function handleText(){
    setText(!texto)
}



    return (
        <div className="text">
            

            <button className="boton-contador" onClick={handleText}>Ocultar/Mostrar</button>
           { texto===true && <h2 className="text-text">HOLA PAPU</h2>}

        </div>
    )
}
export default Text