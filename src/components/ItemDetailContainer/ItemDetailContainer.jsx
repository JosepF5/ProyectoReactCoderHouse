import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getFetch} from "../../helpers/getFetch"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [prod, setProd] = useState({})
    const {id} = useParams()

    useEffect(() => {             
        getFetch
        .then(resp =>setProd(resp.find((prod)=>prod.id===parseInt(id))))
        .catch(err =>console.log(err))
        .finally(()=>setLoading(false))
    },[id])    
    
    return (
        <>
             {loading ? 
                    <h2>Cargando...</h2>
                :
                    <center>
                    <div className='border border-3 border-secondary'>
                        <ItemDetail prod={prod} />                        
                    </div>
                    </center>
            }            
        </>
    )
}

export default ItemDetailContainer
