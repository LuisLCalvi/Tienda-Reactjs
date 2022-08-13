import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import{ addDoc, doc, collection, serverTimestamp, getDoc, updateDoc} from "firebase/firestore"
import { cartContext } from '../../Context/CartContext';
import swal from 'sweetalert';
import './CartFinish.css'
import { Link } from "react-router-dom";


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
      let product
      const productCollection = collection(db, 'productos');
      const referenceDoc = doc(productCollection, id);
      getDoc(referenceDoc)
      .then(result => {
          product = {
            id: result.id,
            stock: result.data().stock - qtyProducts,
         }
          updateDoc(referenceDoc, product)
          product.stock < 0 ? swal("No hay stock suficiente", "Gracias", "Error") : swal(
        "Compra realizada",
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

  const  onSubmit = (e) => {
    e.preventDefault();
    finalizarCompra();
    console.log(finalizarCompra);
    
  }

  return (
    <>
    
      
<form onSubmit={ onSubmit }>
    <div class="grid gap-6 mb-6 md:grid-cols-2" >

        <div>
            <label htmlFor='Name' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>

          <input type="text" value={form.lastName} name= "apellido" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="" onChange={handleChange} />
        </div>

        <div>
        <label htmlFor='Name' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>

        <input type="text" value={form.name} name= "nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="" onChange={handleChange} />

        </div>

        <div>
          <label htmlFor='email' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>

        <input type="text" value={form.email} name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="" onChange={handleChange} />

        </div>

        
        <div>
        <label htmlFor='phone' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
        
        <input type="text" value={form.phone} name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="codigo de area + numero" required="" onChange={handleChange} />
          
        </div>

        
        <div>
                  <label htmlFor='address' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Direccion</label>
        <input type="text" value={form.address} name="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Calle falsa 123" required="" onChange={handleChange} />
          
        </div>

        <div>

        <label htmlFor='country' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pais </label>

        <input type="text" value={form.country} name="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Argentina" required="" onChange={handleChange}/>
          
        </div>

        <div>
        <label htmlFor='state' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Provincia</label>
        <input type="text" value={form.state} name="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entre Rios" required="" onChange={handleChange}/>

        </div>

        
        <div>
        <label htmlFor='city' class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
        <input type="text" value={form.city} name="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Parana" required="" onChange={handleChange} />
          
        </div>
        









        
    </div>
    <button type="submit" class="text-gray-900 py-2 px-4 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" >Finalizar</button>
</form>

      
      </>
  );

  }


export default CartFinish;
