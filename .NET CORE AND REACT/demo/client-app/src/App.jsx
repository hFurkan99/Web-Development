import ActivityContextProvider from "./store/activity-context";
import NavBar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <ActivityContextProvider>
          <NavBar />
          <Outlet />
        </ActivityContextProvider>
      )}
    </>
  );
}

export default App;
