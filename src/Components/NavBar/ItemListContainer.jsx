import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import ItemDetailsContainer from './ItemDetailsContainer';


export const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <ItemList products={products} />
            <ItemDetailsContainer/>

        </>
    )
}


export default ItemListContainer
