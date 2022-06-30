import React from 'react'
import logo from '../../img/imagenlogo.png'
import CartWidget from './CartWidget'


const NavBar = () => {
return (
    
    <>  
        
        <nav style={style.navStyle}>
        <img style={style.imagenstyle} src = {logo} alt=""  />
        <h1 style ={style.h2Style}>TIENDA SHOP</h1> 

        <a style={style.anchor} href="">Nosotros</a>
        <a style={style.anchor} href="">Categoria 1</a>
        <a style={style.anchor} href="">Categoria 2</a>
        <a style={style.anchor} href="">Categoria 3</a>
        <a style={style.anchor} href="">Contacto</a>

        

        <CartWidget />
    </nav>

    </>
    




)

}

export default NavBar

const style = {

    imagenstyle:{
        width: '7%',
        heigth: '7%',
    },

    h2Style:{
        display: 'flex',

    },

    navStyle: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(235, 235, 235)',
    },

    anchor:{
        margin: 10,
        alingItems: 'center',
    }
}