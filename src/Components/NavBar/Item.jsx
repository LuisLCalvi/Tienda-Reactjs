import React from 'react'

const Item = ({ product }) => {

    return (
        <>
        <div style={style.container}>
            <h2 >{product.title }</h2>
            <img src={product.image} alt=""  width="150" height="130" style={style.containerImg}/> 
            <h3 style={style.containerPrice}>{product.price} </h3>
            <button style={style.containerDetails}>Ver detalle del producto</button>
        </div>


        
        </>

    );
};

export default Item;


const style ={
    container:{
        display: 'flex',
        flexDirection: 'column',
        width: '260px',
        height: 'auto',
        marginBottom: '140px',
        marginLeft: '20%',
        position: 'relative',
        textAlign: 'justify',
        border: '2px black solid',
        borderRadius: '5px'
    },

    containerTitle:{
        backgroundColor: 'rgb(235, 235, 235',
        marginTop: '0',
        justifyContent: 'center',
    },

    containerList: {
    listStyle: 'none',
    fontFamily: 'Arial',
    justifyContent: 'center',

    },

    containerDescription:{
        width: '90%',
        marginLeft: '4px',
        justifyContent: 'justify',
        fontFamily: 'Arial',
        
    },

    containerDetails:{
        marginLeft: '20%',
    },

    containerPrice:{
        marginLeft: '40%',
        fontFamily: 'Arial',
        
    },

    containerImg:{
        marginLeft: '20%',

    },


}