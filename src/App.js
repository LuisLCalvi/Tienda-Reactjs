import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './Components/NavBar/Cart';
import CartCustomProvider from './Context/CartContext'



function App() {

  return (

    <BrowserRouter>
      <CartCustomProvider >

      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/product/:productId" element={<ItemDetailsContainer />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartCustomProvider>


    </BrowserRouter>
  )   

    

  }



export default App
