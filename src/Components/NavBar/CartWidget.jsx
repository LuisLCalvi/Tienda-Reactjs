import React, { useContext } from 'react'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () =>{

    const { qtyProducts } = useContext(cartContext);


    return (
        <button>
            <LocalGroceryStoreIcon color="primary" fontSize="large" />
            <p>{ qtyProducts }</p>

        </button>
        
    )

}

export default CartWidget
