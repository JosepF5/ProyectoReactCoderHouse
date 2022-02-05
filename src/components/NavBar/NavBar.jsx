import {Navbar,Container,NavDropdown,Nav,Offcanvas,Form,FormControl,Button} from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JF5 STORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#consolas">Consolas</Nav.Link>
              <Nav.Link href="#mouses">Mouses</Nav.Link>
              <Nav.Link href="#mouses">Teclados</Nav.Link>
              <Nav.Link href="#mouses">Cascos</Nav.Link>
              <Nav.Link href="#mouses">Monitores</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
    );
}

export default NavBar