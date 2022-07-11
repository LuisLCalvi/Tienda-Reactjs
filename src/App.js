import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailsContainer from './Containers/ItemDetailsContainer';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Cart from './Components/NavBar/Cart';


function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/product/:productId" element={<ItemDetailsContainer />}/>
        <Route path="./Components/NavBar/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )   

    

  }



export default App
