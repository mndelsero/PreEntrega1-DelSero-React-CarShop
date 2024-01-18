import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';


const Checkout = () => {

    const [pedidoId, setPedidoId]=useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)
    const { register, handleSubmit } = useForm();
    const comprar = (data) => { 
        const pedido ={
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);
    const pedidosRef=collection(db, "pedidos");
    addDoc(pedidosRef, pedido)
    .then((doc)=>{
        setPedidoId(doc.id)
        vaciarCarrito()
    })
    }

    if (pedidoId){
        return(
            <div className='final-compra'>
                <h1>Muchas Gracias Por tu Compra!!</h1>
                <p>Tu numero de Pedido es {pedidoId}</p>
                <Link className='volver' to="/">Volver a Home!</Link>
            </div>
        )
    }


  return (
    <div className='contacto'>
            <h2>FINALIZAR COMPRA</h2>

            <form action="" className='formulario' onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input type="email" name="" id="" placeholder='Ingresa tu Mail' {...register("mail")} />
                <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")} />
                <textarea className='comment' name="comment" id="" cols="30" rows="5" placeholder='Comentanos tu duda!!'   {...register("comment")}></textarea>

                <button type="submit" className="enviar">Comprar</button>
            </form>


        </div>
  )
}

export default Checkout
