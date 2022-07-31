import React, {useState} from "react";





const ItemCount = ({ stock, onAdd, initial = 1 }) => {

    const [contador, setContador] = useState (initial)

    const agregar = () => {
        contador < stock && setContador (contador + 1)
        contador >= stock && console.log ("No hay Stock disponible") 
    }

    const quitar = () => {

        contador > initial && setContador (contador - 1)
    }

    const agregarAlCarrito = () =>{
        onAdd (contador);
        
    }

    return (
        <>
        <div style={style.container}>
            <div style={style.containerAdd}>
                <button onClick={quitar}>-</button>
                <p style={style.containerContador}> { contador } </p>
                <button onClick={agregar}>+</button>
            </div>
            <button onClick={agregarAlCarrito} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Agregar al Carrito </button>

        </div>
        </>

    )
}

const style = {

    container:{
        display: 'flex',
        flexDirection: 'column',
        alingItems: 'center',
        height: '30px',
        width: '260px',
        padding: '5px'
    },

    containerAdd:{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0',
        height: '70px',
        padding: '5px',
        backgroundColor: 'rgb(235, 235, 235)',
    },
    containerContador:{
        marginTop: '-1px',
    },

}

export default ItemCount

