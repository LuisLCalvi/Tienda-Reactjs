import React,{ useContext } from "react";
import { cartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';




const Cart = () => {

    const{ products, clear,  qtyProducts, totalPrice, deleteProduct  } = useContext(cartContext);

return (
    <>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="py-3 px-6">
                    Producto
                </th>
                <th scope="col" class="py-3 px-6">
                    Cantidad
                </th>
                <th scope="col" class="py-3 px-6">
                    Precio
                </th>
                <th scope="col" class="py-3 px-6">
                    Eliminar
                </th>
            </tr>
        </thead>
        <tbody>
            {
            products.map(product => (
                <tr key={product.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="p-4 w-32">
                    <img src={product.image}/>
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {product.title}
                </td>
                <td class="py-4 px-6">
                {product.qty}
                    
                </td>
                <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    {product.price}
                </td>
                <td class="py-4 px-6">
                <button  onClick={() => deleteProduct(product.id)}><RemoveIcon />
                </button>
                </td>

                </tr>

            ))}
            
            
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="py-3 px-7 text-base">Total (+ IVA):</th>
                <td></td>
                <td class="py-4 px-6">{qtyProducts}</td>
                <td class="py-4 px-6">{totalPrice() * 1.21}</td>
            </tr>
        </tfoot>
        

        
    </table>

        <div>
        {qtyProducts === 0 ? <h1>No hay productos agregados, por favor vuelva  <Link to="/"><button class="text-gray-900 py-2 px-4 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Volver</button></Link> </h1>: 
        <div>
            <Link to="/CartFinish"><button class="text-gray-900 py-2 px-4 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 " >Finalizar Compra</button></Link>
            <button  onClick={clear} class="text-gray-900  py-2 px-4 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Vaciar</button>
        </div>
               }
        </div>
    
</div>



    


    </>
)
}

export default Cart;

