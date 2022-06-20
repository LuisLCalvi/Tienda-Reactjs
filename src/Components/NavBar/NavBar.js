import React from 'react'


const NavBar = () => {
return (
    
    <>  

        <h1 style ={style.h2Style}>TIENDA SHOP</h1> 

        <nav style={style.navStyle}>
        <a style={style.anchor} href="">Nosotros</a>
        <a style={style.anchor} href="">Categoria 1</a>
        <a style={style.anchor} href="">Categoria 2</a>
        <a style={style.anchor} href="">Categoria 3</a>
        <a style={style.anchor} href="">Contacto</a>

    </nav>


    </>
    




)

}

export default NavBar

const style = {

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