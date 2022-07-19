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
                <div style={styles.infoText}>
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
                    

                </div>

            {buyFinalized ? <Link to="/cart">
            <button>Finalizar compra</button>

            </Link>
        : <ItemCount initial={1} stock={10} onAdd={onAdd} />}
    </div>
    </div>
);
};

const styles = {
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: "30%"
    },
    infoTextContainer: {
        display: "flex",
        flexDirection: "column",
    },
    infoText: {
        fontFamily: 'arial',
        padding: "10px",
        marging: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
    }
};

export default ItemDetail
