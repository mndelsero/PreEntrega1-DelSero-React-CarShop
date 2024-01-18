import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { pedirItemPorId } from './helpers/PedirDatos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import { db } from '../firebase/config'

const ItemDetailContainer = () => {
const [item, setItem]=useState(null)
const id=useParams().id



useEffect(() => {
  const docRef= doc(db,"productos", id)
  getDoc(docRef)
  .then((resp)=>{
    setItem({...resp.data(),id: resp.id})
  })
 
    // pedirItemPorId(Number(id))
    // .then((res)=>setItem(res.data[0]))
}, [id])


  return (
    <div className='detail-page'>
      {item && <ItemDetail item={item}/>}
      
    </div>
  )
}

export default ItemDetailContainer
