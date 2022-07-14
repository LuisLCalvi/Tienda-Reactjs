import React, {useState} from "react";
import { Link } from 'react-router-dom'
import ItemCount from '../Components/NavBar/ItemCount'



const ItemDetail = ({ product }) => {

const [finalized, setFinalized] = useState(false)

const onAdd = ({contador}) =>{
    setFinalized (true);
    console.log ("se agrego al carrito", contador)
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

                {!finalized 
                ? <ItemCount initial={1} stock={8} onAdd={onAdd} />
                :<Link to= "/Cart">
                    <button>Finalizar compra</button>
                </Link> }


                
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
