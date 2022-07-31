import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { getDocs, collection, query, where} from 'firebase/firestore'
 


export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    const { categoryId } = useParams();


    useEffect(() => {


        const q = categoryId
        ? query(collection(db, 'productos'), where('category', '==', categoryId))
        : collection(db, 'productos');
        
    getDocs(q)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setProducts(lista);
        })
        .catch(err => console.log(err))
        .finally(() => setLoaded(false))

}, [categoryId]);


    return (
        <>
        <h1 class="text-4xl dark:text-white text-center"> {greeting}</h1>
            {loaded ? <CircularProgress color="success" /> :<ItemList products={products} />}

        </>
    )
}


export default ItemListContainer
