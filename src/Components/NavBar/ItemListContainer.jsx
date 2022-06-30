import react from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


const ItemListContainer = () => {


    return (
        <>
        <h2></h2>
        
        <ItemList/>

        <ItemCount stock={10}/>
        </>
    )
}

export default ItemListContainer