import React from 'react'
import Item from './Item'
import { useEffect, useState } from 'react'
import pantalonchino from '../../img/pantalonchino.jpg'
import jeans2 from '../../img/jeans2.jpg'
import jeans from '../../img/jeans.jpg'

    const initialProducts = [
        {id:0, name: 'Pantalón corte chino', description: 'Gabardina Elastizada 98% Algodón 2% elastano', price: '4500', pictureUrl: pantalonchino, stock: 'Stock disponible' + ' ' +'15',},
        {id:1, name: 'Jean Rocker Stone Blue', description: 'Corte Slim Fit', price: '5500', pictureUrl: jeans2,stock: 'Stock disponible' + ' ' +'5'},
        {id:2, name: 'Jean Boston Dark Stone', description: 'Elastizado', price: '5500', pictureUrl: jeans, stock: 'Stock disponible:' + ' ' + '10'},
    
    
    ] 


const promesa = new Promise( (res, rej)=> {

    setTimeout (()=>{
        res (initialProducts);
    }, 2000 );
    
    })

const ItemList = () => {

    const [products, setProducts] = useState ([]);

    useEffect (() =>{
        promesa.then((data) =>{
            console.log (data)
            setProducts (data);
        }).catch(()=>{

        })

    })

return (
    <>
    {products.map((product) =>
    <div style={style.container}>
        <h3 style={style.containerTitle}>{product.name }</h3>
        <img src={product.pictureUrl} alt="" width="200" height="180" />
        <ul style={style.containerList}>
            <li><h5>{product.description}</h5></li>
            <li><button>Ver detalle del producto</button></li>
        </ul>
        <p style={style.containerStock}> {product.stock}</p>
    </div>)}
    
    </>


)
}

export default ItemList


const style ={
    container:{
    width: '250px',
    height: '360px',
    border: '1px solid black',
    marginLeft: '20%',
    alingItems: 'center',
    marginBottom: '10px'
    
    },

    containerTitle:{
        backgroundColor: 'rgb(235, 235, 235',
        marginTop: '0',
    },

    containerList: {
    listStyle: 'none',
    fontFamily: 'Arial',
    justifyContent: 'center',

    },

    containerStock:{
        justifyContent: 'center',
        fontFamily: 'Arial',
        backgroundColor: 'rgb(235, 235, 235)'
    }
    

}