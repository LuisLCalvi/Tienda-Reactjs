import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import{ addDoc, doc, collection, serverTimestamp, getDoc, updateDoc} from "firebase/firestore"
import { cartContext } from '../../Context/CartContext';
import swal from 'sweetalert';
import './CartFinish.css'


const CartFinish = () => {

    const{ products, clear, totalPrice, qtyProducts } = useContext(cartContext);

    const [form, setForm] = useState({});
    const [sendProducts, setSendProducts] = useState(false);

    const finalizarCompra = () => {
      const ventasCollection = collection(db, 'ventas');
      addDoc(ventasCollection, {
        form,
        items: products,
        date: serverTimestamp(),
        PriceIVA:  totalPrice () * 1.21 , 
      })
      .then(({id}) => {
        console.log(id);
        updateStockDb(products);
        clear();
       ;
      })
      .catch(error => console.err);     
    
    }

    const updateStockDb = (products) => {
      products.forEach((product) => {
        updateStock(product.id, product.qtyProducts);
      });      
    }

    const updateStock = (id, qtyProducts) => {
      let product;
      const productCollection = collection(db, 'productos');
      const referenceDoc = doc(productCollection, id);
      getDoc(referenceDoc)
      .then(result => {
          product = {
            id: result.id,
            stock: result.data().stock - qtyProducts,
         }
          updateDoc(referenceDoc, product)
          product.stock < 0 ? swal("No hay stock suficiente", "Gracias", "Error") : swal("Compra realizada",
        "Gracias", "success",

        
        );
      })
    } 


    


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    finalizarCompra();
    console.log(finalizarCompra);
    
  }

  return (
    <>
    
      
<form onSubmit={onSubmit}>
    <div class="grid gap-6 mb-6 md:grid-cols-2">

              <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
            <input type="text" value={form.lastname} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="" onChange={handleChange}/>
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
            <input type="text" value={form.name} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="" onChange={handleChange}/>
        </div>
        <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        <input type="email" value={form.email} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="" onChange={handleChange}/>
    </div>
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teléfono</label>
            <input type="tel" value={form.phone} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="codigo de area + numero" required="" onChange={handleChange}/>
        </div>

        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">País</label>
            <input type="text" value={form.country} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Argentina" required="" onChange={handleChange}/>
        </div>  
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Provincia</label>
            <input type="text" value={form.state} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entre Ríos" required="" onChange={handleChange}/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Ciudad</label>
            <input type="text" value={form.city} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Parana" required="" onChange={handleChange}/>
        </div>

        
    </div>

    <button class="text-gray-900 py-2 px-4 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" type="Submit">Finalizar</button>
</form>

      
      </>
  );

  }


export default CartFinish;
