import React, {useState, useContext} from "react";
import { Link } from 'react-router-dom'
import ItemCount from '../Components/NavBar/ItemCount'
import { cartContext } from '../Context/CartContext';


const ItemDetail = ({ product }) => {

    const [buyFinalized, setBuyFinalized] = useState(false)
    
    const { addProduct } = useContext(cartContext);


    const onAdd = (contador) => {

    addProduct({...product, qty: contador});

    setBuyFinalized(true);
    }



    return (
        
        <div style={styles.infoContainer}>
            <img style={styles.img} src={product.image} alt={product.title} />
            <div style={styles.infoTextContainer}>
            <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        <h4 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">${product.price}</h4>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
    </div>

            {buyFinalized ? <Link to="/cart">
                
            <button class="text-gray-900 py-2 px-4 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                Finalizar compra</button>

            </Link>
        : <ItemCount initial={1} stock={50} onAdd={onAdd} />}
    </div>
    </div>
);
};

const styles = {
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '15px'
    },
    img: {
        width: "30%",
        marginTop: '15px'
    },

};

export default ItemDetail
