import { useEffect, useState } from "react"
// import { pedirDatos } from "./helpers/PedirDatos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const category = useParams().category
    useEffect(() => {
        const productosRef = collection(db, "productos")
        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

if(category){
    setTitulo(category)

}else{setTitulo("Productos")}

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

        // pedirDatos()
        //     .then((res) => {
        //         if (category) {               
        //             const filtro=res.data.filter((prod) => prod.category === category)
        //             setProductos(filtro)
        //             setTitulo(filtro[0].category_name)
        //         } else {
        //             setProductos(res.data)
        //             setTitulo("Productos")
        //         }

        //     })
    }, [category])

    return (
        <div >
            <ItemList productos={productos} titulo={titulo} />
        </div>
    )
}

export default ItemListContainer