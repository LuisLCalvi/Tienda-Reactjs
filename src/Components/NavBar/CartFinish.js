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
        let ordenid = id;
        updateStockDb(products);
        clear();
       // enviar link a orden
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
          product.stock < 0 ? swal("No hay stock suficiente", "Gracias", "Error") : swal("Compra realizada", "Gracias", "success");
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
    
  }

  return (
    <>
    
    <div className="container">
      <h2 >Formulario de Envio </h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='Name'>Nombre Completo</label>
        <input type="text" value={form.name} name= "nombre" onChange={handleChange} />
        <label htmlFor='email'>Email</label>
        <input type="text" value={form.email} name="email" onChange={handleChange} />
        <label htmlFor='phone'>Telefono</label>
        <input type="text" value={form.phone} name="phone" onChange={handleChange} />
        <label htmlFor='address'>Direccion</label>
        <input type="text" value={form.address} name="address" onChange={handleChange} />
        <label htmlFor='country'>Pais </label>
        <input type="text" value={form.country} name="country" onChange={handleChange} />
        <label htmlFor='state'>Provincia</label>
        <input type="text" value={form.state} name="state" onChange={handleChange} />
        <label htmlFor='city'>Ciudad</label>
        <input type="text" value={form.city} name="city" onChange={handleChange} />
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>      
        </form>
      
    </div> 
    </>
  );

  };


export default CartFinish;
