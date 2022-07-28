import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import{ addDoc, doc, collection, serverTimestamp, getDoc, updateDoc, query, where } from "firebase/firestore"
import { cartContext } from '../../Context/CartContext';
import swal from 'sweetalert';


const CartFinish = () => {
    const{ products, clear, totalPrice } = useContext(cartContext);

    const [form, setForm] = useState({});
    const [sendProducts, setSendProducts] = useState(false);
    
    const finalizarCompra = () => {
      const ventasCollection = collection(db, 'ventas');
      addDoc(ventasCollection, {
        form,
        items: products,
        date: serverTimestamp(),
        total: totalPrice,
        priceFinish: totalPrice * 1.21,


      })
    };



let orden = {
    form,
    items: products,
    date: serverTimestamp(),
    total: totalPrice,
    priceFinish: totalPrice * 1.21,

  };
 // updateCollectiondb(products);
  clear();
  //validarStock (result.id, qty);
  obtenerIdVenta(orden)


const obtenerIdVenta = (orden) => {
    const ventasCollection = collection(db, 'ventas');
    const q = query(ventasCollection, where('totalFinal', '==', orden.totalFinal), where('IVA', '==', orden.IVA), where('Total', '==', orden.Total),where("form.name", "==", orden.form.name), where("form.lastName", "==", orden.form.lastName), where("form.email", "==", orden.form.email), where("form.address", "==", orden.form.address), where("form.phone", "==", orden.form.phone));  

    getDoc(q)
      .then(result => {
        const lista  = result.docs.map(product => {
          return {
            id: product.id,
            ...product.data(), 
          }
        })
        setSendProducts(lista); 
      }).catch(error => console.err)
  }

//const updateCollectiondb = (products) => {
    //products.forEach((product) => {
  //      updateStock(product.id, product.qty);
  //  });      
 // }

  // const updateStock = (id, quantity) => {
  //   let product;
  //   const productCollection = collection(db, 'productos');
  //   const referenceDoc = doc(productCollection, id);

  //   getDoc(referenceDoc)
  //   .then(result => {
  //       product = {
  //         id: result.id,
  //         stock: result.data().stock - quantity,
  //      }
  //       updateDoc(referenceDoc, product)
  //   })
  // } 

  // const validarStock = (id, quantity) => {
  //   let product;
  //   const productCollection = collection(db, 'productos');
  //   const referenceDoc = doc(productCollection, id);
  //   getDoc(referenceDoc)
  //   .then(result => {
  //       product = {
  //         id: product.id,
  //         stock: product.data().stock - product.qty,
  //      }
  //     product.stock < 0 ? swal("No hay stock suficiente", "Error") : swal("Compra realizada", "Gracias por su compra", "success");
  //   })
  // }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    finalizarCompra();
    
  }

  return (
    <>
    
    <div className="container">
      <h3>Formulario de Envio </h3>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Enviar</button> 
      </form>
      
    </div> 
    </>
  );

  };

export default CartFinish;
