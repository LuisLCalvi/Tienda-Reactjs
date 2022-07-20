import React, { createContext, useState, useEffect } from 'react'


export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = () => {
        let qty = 0;
        products.forEach(product =>{
            qty += product.qty;

        })
        setQtyProducts (qty);
        
    }

    useEffect(() => {
        getQtyProducts();
        //eslint-disable-next-line  react-hooks/exhaustive-deps
    }, [products])

        const addProduct = (product) => {
        if (isInCart (product.id)){
            const found = products.find (p => p.id === product.id);
            const index = products.indexOf (found);
            const aux = [...products];
            aux[index].qty += product.qty;
            setProducts (aux)
        }

        else {
            setProducts ([...products, {...product}]);
        }

        getQtyProducts();
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(products => products.id===id));

        getQtyProducts();

    };

    const isInCart = (id) => {
        return products.some (products => products.id===id);
    };

    const clear = () => {
        setProducts([]);
        setQtyProducts (0);
    }

    const totalPrice = () => {
        let totalPrice = 0; 
        products.forEach((products) => {
          totalPrice += products.price * qtyProducts;
        });
        return totalPrice;
    }

    return (
        <Provider value={{products, addProduct, deleteProduct, clear,  qtyProducts, totalPrice }}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider