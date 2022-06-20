import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/imagenlogo.jpg'


const NavBar = () => {
return (
    
    <header style={style.container}>  

        <img src={logo} alt="" />
        <h1 style ={style.h2Style}>TIENDA SHOP</h1> 

        <nav style={style.navStyle}>
        <a style={style.anchor} href="">Nosotros</a>
        <a style={style.anchor} href="">Categoria 1</a>
        <a style={style.anchor} href="">Categoria 2</a>
        <a style={style.anchor} href="">Categoria 3</a>
        <a style={style.anchor} href="">Contacto</a>

    </nav>

        <AddShoppingCartIcon fontSize="large" sx={{ color: pink[500] }} />
    </header>
    




)

}

export default NavBar

const style = {

    container:{
        display: 'flex',
        justifyContent: 'space-between',
    },


    h2Style:{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgb(235, 235, 235)',


    },

    navStyle: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        background: 'violet',
    },

    anchor:{
        margin: 10,
    }
}