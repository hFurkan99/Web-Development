import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu({ handleDraw }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Map</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => handleDraw(true)}>Add Drawing</Nav.Link>
          <Nav.Link>Query Drawing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
