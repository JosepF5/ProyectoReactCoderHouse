import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {Link} from 'react-router-dom'
import './Item.css';

function Item({prod}) {
    
    return (
        <Col>
        <div key={prod.id}>
            <Card style={{ width: '18rem', margin:'auto' }}>
                 <Card.Img className="imgSize" variant="top" src={prod.foto} />
                 <Card.Body>
                       <Card.Title>{prod.name} - {prod.categoria}</Card.Title>
                      <Card.Text>
                          <Link to={`/detalle/${prod.id}`}>
                          <button className="botonDetalle">Detalle de producto</button>
                          </Link>
                      </Card.Text>
                  </Card.Body>
                 <ListGroup className="list-group-flush">
                     <ListGroupItem>$ {prod.price}</ListGroupItem>
                                                                                   
                 </ListGroup>
                 
            </Card>
        </div>
        </Col>
    )
}

export default Item
