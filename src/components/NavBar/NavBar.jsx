import {Link} from 'react-router-dom'
import {Navbar,Container,NavDropdown,Nav,Offcanvas,Form,FormControl,Button} from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to='/'> JF5 STORE</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/categoria/remeras'> Consolas</Link></Nav.Link>
              <Nav.Link ><Link to='/categoria/gorras'> Mouses</Link></Nav.Link>
              <Nav.Link ><Link to='/teclados'> Teclados</Link></Nav.Link>
              <Nav.Link ><Link to='/cascos'> Cascos</Link></Nav.Link>
              <Nav.Link ><Link to='/monitores'> Monitores</Link></Nav.Link>            
              <CartWidget/>
            </Nav>
          </Navbar.Collapse>
          <Link to='/cart'> Carrito</Link>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBar