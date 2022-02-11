import { memo } from 'react'
import { Row } from 'react-bootstrap'
import Item from '../Item/Item'

const ItemList = memo(
    ({ productos })=> {
        console.log('itemList')
        return (
            <>
                <Row xs={1} md={2} className="g-4">
                { productos.map((prod) => <Item prod= {prod} />)  }
                </Row>
            </>
        )
    }
, (oldProps, newProps)=> oldProps.productos.length === newProps.productos.length ) 

export default ItemList
