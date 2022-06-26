import react, { useState } from 'react'



const ItemCount = ({ stock, initial = 1 }) => {

    const [contador, setContador] = useState (initial)

    const agregar = () => {
        contador < stock && setContador (contador + 1)
        contador >= stock && console.log ("No hay Stock disponible") 
    }

    const quitar = () => {

        contador > initial && setContador (contador - 1)
    }

    const onAdd = () =>{

        contador <= 2 && contador < 10 && console.log ("Gracias acabas de realizar una compra de" + " " + contador + " " + "productos")

        contador = initial && contador < 10 && console.log ("Gracias acabas de realizar una compra de" + " " + contador + " " + "producto")
    }

    return (
        <>
        <div style={style.container}>

            <h2 style={style.titlecontainer}>PRODUCTO</h2>
            <div style={style.containerAdd}>
                <button onClick={quitar}>-</button>
                <p> { contador } </p>
                <button onClick={agregar}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al Carrito</button>

        </div>
        



        </>

    )
}

const style = {

    container:{
        display: 'grid',
        alingItems: 'center',
        height: '200px',
        width: '170px',
        border: '1px black solid',
        padding: '5px'
    },

    titlecontainer:{
        fontSize: '25px',
    },

    containerAdd:{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px',
        width: '160px',
        height: '40px',
        backgroundColor: 'rgb(235, 235, 235)',
    }
}

export default ItemCount

