import React from "react";
import ItemCount from '../Components/NavBar/ItemCount'

const ItemDetail = ({ product }) => {
    return (
        <div style={styles.infoContainer}>
            <img style={styles.img} src={product.image} alt={product.title} />
            <div style={styles.infoTextContainer}>
                <div style={styles.infoText}>
                    <h1>{product.title}</h1>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
                    <ItemCount/>

                </div>

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
