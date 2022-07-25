import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'

export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);

    const { productId } = useParams();

    useEffect(() => {
        
        
        const productsCollection = collection(db, 'productos');
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then(result => {
            setProduct({
                id: result.id,
                ...result.data(),
            })
        })
        .catch(err => console.log(err))
        //.finally(() => setLoaded(false))
    }, [productId]);

    return (
        <>
        <ItemDetail product={product} />
        </>
    )
}


export default ItemDetailsContainer