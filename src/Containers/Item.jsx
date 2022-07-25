import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import CartContext from '../Context/CartContext';

const Item = ({ product }) => {

    return (
        <Card sx={{ maxWidth: 345 }} style={styles.container}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={styles.title}
                    >
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/product/${product.id}`}>
                    <Button size="small" color="primary">
                        Ver Detalles
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Item;


const styles = {
    container: {
        width: window.innerHeight > 900 ? "25%" : "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        backgroundColor: "rgb(235, 235, 235)"
    },
    title: {
        textOverflow: "arial",
        overflow: "hidden",
        height: 100,
    }
};
