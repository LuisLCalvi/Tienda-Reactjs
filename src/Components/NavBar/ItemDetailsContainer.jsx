import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(data=>setProduct(data))
            .catch(err=>console.log(err))
    }, [productId]);

    return (
        <>
        <ItemDetail product={product} />
        </>
    )
}


export default ItemDetailsContainer