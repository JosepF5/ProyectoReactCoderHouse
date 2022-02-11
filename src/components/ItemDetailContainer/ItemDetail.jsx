import {useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import ItemCount from "./ItemCount";
import { Col, Row } from "react-bootstrap"
import { useCartContext } from '../../context/CartContext';

function ItemDetail({prod}) {
    const [count, setCount] = useState(0)
    const [goCart,setGoCart]=useState(false)
    const {cartList ,agregarAlCarrito}= useCartContext()

    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito( {...prod, cantidad:cant} ) 
        setGoCart(true)
    }
    
    console.log(cartList);
    return (
        <div key={prod.id}>
            <p> Producto: {prod.name}</p>
            <p> Descripcion: {prod.categoria}</p>
            <p>
                 <img className='imgDetail' src={prod.foto} alt="" />
            </p>
            <p>precio: $ {prod.price}</p>
             <p> 
                 {!goCart ?
                  <ItemCount  max ={10} initial={1} onAdd={onAdd}/>
                  :
                  <Link to='/cart'><button>Ir al carrito</button></Link>
                }
                <Link to='/'><button>Home</button></Link>
            </p>
           
        </div>
    )
}

export default ItemDetail
