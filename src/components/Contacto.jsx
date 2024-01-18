import React from 'react'
import { useForm } from 'react-hook-form'

const Contacto = () => {

    const { register, handleSubmit } = useForm();
    const enviar = (data) => { console.log(data) }




    return (
        <div className='contacto'>
            <h2>CONTACTATE</h2>

            <form action="" className='formulario' onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input type="email" name="" id="" placeholder='Ingresa tu Mail' {...register("mail")} />
                <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")} />
                <textarea className='comment' name="comment" id="" cols="30" rows="5" placeholder='Comentanos tu duda!!'   {...register("comment")}></textarea>

                <button type="submit" className="enviar">Enviar</button>
            </form>


        </div>
    )
}

export default Contacto
