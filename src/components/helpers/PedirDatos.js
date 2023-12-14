import data from "../../proddata.json"

 export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export const pedirItemPorId=(id)=>{
    return new Promise((resolve, reject) => {
       const item= data.find((el)=>el.id===id)

       if (item){
        resolve(item)
       }else{reject({error: "no se encontro el producto"})}
    })

}