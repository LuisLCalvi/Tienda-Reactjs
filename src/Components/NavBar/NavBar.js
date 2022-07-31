import React from 'react'
import logo from '../../img/imagenlogo.png'
import CartWidget from './CartWidget'
import { Link, NavLink } from "react-router-dom";



const NavBar = () => {


    const categories = [
        { name: "electronics", id: 0, route: "/category/electronics" },
        { name: "jewelery", id: 1, route: "/category/jewelery" },
        { name: "men's clothing", id: 2, route: "/category/men's clothing" },
        { name: "women's clothing", id: 3, route: "/category/women's clothing" },
    ];

return (
    
    <>

    
    <nav style={style.navStyle}>

    <Link to="/"> <img style={style.imagenstyle} src = {logo} alt=""/></Link>
    <h1 class=" self-center text-4xl font-semibold whitespace-nowrap dark:text-white">TIENDA SHOP</h1>
    {categories.map((category) => <NavLink  class=" self-center" key={category.id} to={category.route} >{category.name}</NavLink>)}
    <Link to="/cart"><CartWidget /></Link>

    
    </nav>
    
        

    </>
    




)

}

export default NavBar

const style = {

    imagenstyle:{
        width: '17%',
        heigth: '17%',
    },

    h2Style:{
        display: 'flex',

    },

    navStyle: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: 'rgb(235, 235, 235)',
    },



}