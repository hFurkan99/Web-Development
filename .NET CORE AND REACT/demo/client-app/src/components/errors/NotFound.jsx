import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
function NotFound() {
  console.log("render");
  return (
    <Container>
      <h4>PAGE NOT FOUND!</h4>
      <p>{`The page you're looking for doesn't exist.`}</p>
      <Button as={Link} to="/activities" variant="secondary">
        Go to activities page
      </Button>
    </Container>
  );
}

export default NotFound;
