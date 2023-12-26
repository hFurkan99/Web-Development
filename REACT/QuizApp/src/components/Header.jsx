import Logo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Quiz Logo" />
      <h1>REACTQUIZ</h1>
    </header>
  );
}

export default Header;
