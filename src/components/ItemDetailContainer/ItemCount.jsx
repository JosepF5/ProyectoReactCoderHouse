import { useState } from 'react'

function ItemCount({initial,max}) {
    const [value, setValue] = useState(initial);

    const handleSuma = () => {
        value<max ? setValue(value+1) : alert("Compra maxima!") 
    }

    const handleResta = () => {
        value>initial ? setValue(value-1) : alert("Compra mínima!") 
    }
    return(
        <>
            <div>
                <h1>{value}</h1>
                <button onClick={handleSuma}>+</button>
                <button onClick={handleResta}>-</button>
            </div>
        </>
    )
}

export default ItemCount
