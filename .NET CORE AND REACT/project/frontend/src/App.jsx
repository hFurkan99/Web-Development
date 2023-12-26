import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./layout/Navbar";
function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
