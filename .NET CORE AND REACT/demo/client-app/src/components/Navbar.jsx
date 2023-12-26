import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../../public/assets/logo.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ActivityContext } from "../store/activity-context";
function NavBar() {
  const { handleResetChanges } = useContext(ActivityContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink to="/">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top me-5"
            />
          </NavLink>

          <Navbar.Brand as={NavLink} to="/">
            Reactivities
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={handleResetChanges}
              as={NavLink}
              to="/activities"
              className="me-5"
            >
              Activities
            </Nav.Link>
            <NavLink to="/createActivity">
              <Button variant="outline-success">Create Activity</Button>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;
