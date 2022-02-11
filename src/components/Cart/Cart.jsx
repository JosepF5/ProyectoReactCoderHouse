import React from 'react'
import {useContext} from 'react'
import {useCartContext} from '../../context/CartContext'
function Cart() {
  const {cartList,borrarCarrito, precioTotal }= useCartContext()
    return (
        <div className ="container">
          {cartList.map(prod=><li>{prod.name} {prod.cantidad}</li>)}
          <h5>Precio total: {precioTotal()} soles</h5>
          <button onClick={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
