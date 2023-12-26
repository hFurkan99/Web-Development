import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            {/*Absolute*/}
            {/* <NavLink to="/" end> */}

            {/*Relative*/}
            <NavLink to="" end>
              Home
            </NavLink>
          </li>
          <li>
            {/*Absolute*/}
            {/* <NavLink to="/products">Products</NavLink> */}

            {/*Relative*/}
            <NavLink to="products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
