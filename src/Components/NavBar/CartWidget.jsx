import React, { useContext } from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () =>{

    const { qtyProduct } = useContext(cartContext);


    return (
        <button>
            <LocalGroceryStoreIcon color="primary" fontSize="large" />
            <p>{qtyProduct}</p>

        </button>
        
    )

}

export default CartWidget
