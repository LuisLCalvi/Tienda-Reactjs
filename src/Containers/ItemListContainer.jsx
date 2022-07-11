import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

    const [product, setProduct] = useState([]);

    const { categoryId } = useParams();


    useEffect(() => {


        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products'
        fetch(URL)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
    }, [categoryId]);

    return (
        <>
            <ItemList products={product} />

        </>
    )
}


export default ItemListContainer
