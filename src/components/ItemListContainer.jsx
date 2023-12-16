import { useEffect, useState } from "react"
import { pedirDatos } from "./helpers/PedirDatos"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const category = useParams().category
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                if (category) {
                    setProductos(res.filter((prod) => prod.category === category))
                    setTitulo(category)

                } else {
                    setProductos(res)
                    setTitulo("Productos")
                }
            })
    }, [category])



    return (
        <div >
           
            <ItemList productos={productos} titulo={titulo} />

        </div>
    )
}

export default ItemListContainer