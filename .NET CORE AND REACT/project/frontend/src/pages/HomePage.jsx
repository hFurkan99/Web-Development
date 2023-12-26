import Logo from "../../public/assets/logo.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function HomePage() {
  return (
    <section id="home-page">
      <h1>
        <img src={Logo} alt="logo" />
        CineWiki
      </h1>
      <h3>{"Welcome to the CineWiki"}</h3>
      <Button as={Link} to="/movies" className="m-5" variant="outline-warning">
        Take me to the Movies!
      </Button>
    </section>
  );
}

export default HomePage;
