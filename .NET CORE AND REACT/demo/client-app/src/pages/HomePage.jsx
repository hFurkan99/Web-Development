import { Link } from "react-router-dom";
import Logo from "../../public/assets/logo.png";
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <section id="home-page">
      <h1>
        {" "}
        <img src={Logo} alt="" />
        Reactivities
      </h1>
      <h3 className="mb-4">Welcome to Reactivities </h3>
      <Button as={Link} to="/activities" variant="outline-light">
        Take me to the Activities!
      </Button>
    </section>
  );
}

export default HomePage;
