import React,{ useContext } from "react";
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';




const Cart = () => {

    const{ products, clear,  qtyProducts, totalPrice, deleteProduct  } = useContext(cartContext);

return (
    <>

    <main style={style.mainStyle}>
        <table style={style.tableStyle}>
            <thead>
                <tr >
                    <th style={style.tableTitleStyle}>Producto</th>
                    <th style={style.tableTitleStyle}>Cantidad</th>
                    <th style={style.tableTitleStyle}>Precio</th>
                    <th style={style.tableTitleStyle}>Total</th>
                    <th style={style.tableTitleStyle}>Eliminar</th>
                    <th style={style.tableTitleStyle}>Enlace al Producto</th>
                </tr>
            </thead>
            <tbody >

            {
            products.map(product => (
            <tr key={product.id}>
                <td style={style.tableTitleStyle}>{product.title}</td>
                <td style={style.tableQtyStyle}>{qtyProducts}</td>
                <td style={style.tableTitleStyle}>{product.price}</td>
                <td style={style.tableTitleStyle}>{qtyProducts * product.price}</td>
                <td style={style.buttonDelete}> <button  onClick={() => deleteProduct(product)}><RemoveIcon />
                </button></td>
                <td style={style.tableTitleStyle}>  <Link to={`/detail/${product.id}`} >Ver producto</Link></td>           
            </tr>
            ))
        }

        
        </tbody>
        </table>
        
        <div>
        <p>Total: {totalPrice()}</p>
        </div>
        <div>
        <p>Cantidad de Productos: {qtyProducts}</p>
        </div>
        <div>
        <button  onClick={clear} style={style.bottomStyle}>Vaciar</button>
        </div>
        <div>
        {qtyProducts === 0 ? <Link to="/"><button>Volver</button></Link> : <Link to="/CartBuyFinish"><button>Finalizar Compra</button></Link>}
        </div>
        
        
    </main>
    </>
)
}

export default Cart;


const style ={

    mainStyle: {
        display: 'grid',
        fontFamily: 'arial',
        justifyContent: 'center',
        marginTop: '17px',
        backgroundColor: 'rgb(235, 235, 235)'

    },

    tableStyle:{
        // display: 'flex',
        // flexDirection: 'row',
        width: 'auto',
    },

    tableTitleStyle:{
        padding: '10px',
        textDecoration: 'none',


    },


    productsStyle:{
        marginTop: '25px',
        padding: '20px',

    },

    bottomStyle:{
        marginBottom: '14px',
    }



    
}