import { Link, useNavigate } from "react-router-dom";

function Home() {
  //Navigating Programmatically
  const navigate = useNavigate();

  //Absolute
  //   function navigateHandler() {
  //     navigate("/products");
  //

  //Relative
  function navigateHandler() {
    navigate("products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        {/*Absolute*/}
        {/* Go to <Link to="/products">the list of the products.</Link> */}
        {/*Relative */}
        Go to <Link to="products">the list of the products.</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default Home;
