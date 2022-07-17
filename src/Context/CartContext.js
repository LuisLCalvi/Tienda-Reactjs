import React, { createContext, useState, useEffect } from 'react'

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [product, setProduct] = useState([]);
    const [qtyProduct, setQtyProduct] = useState(0);

    const getQtyProduct = () => {
        
    }

    useEffect(() => {
        getQtyProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product])


    const addProduct = (product) => {
        
    }

    const deleteProduct = (id) => {
    };

    const isInCart = (id) => {
    };

    const clear = () => {
        setProduct([]);
    }

    return (
        <Provider value={{ product, addProduct, deleteProduct, clear, qtyProduct }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider