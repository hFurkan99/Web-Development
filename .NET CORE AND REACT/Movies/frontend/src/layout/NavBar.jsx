import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../public/assets/logo.png";

function NavBar() {
  return (
    <>
      <Navbar id="navBar" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <h4>
              <img
                alt=""
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              CineWiki
            </h4>
          </Navbar.Brand>
          <Nav className="me-auto ms-5">
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/createMovie" className="ms-3">
              Create Movie
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
