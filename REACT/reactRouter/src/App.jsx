import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";

import Error from "./components/Error";
import Home from "./components/Home";
import Products from "./components/Products";
import RootLayout from "./components/Root";
import ProductDetail from "./components/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

//Absolute paths
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/products", element: <Products /> },
//       { path: "/products/:productId", element: <ProductDetail /> },
//     ],
//     errorElement: <Error />,
//   },
// ]);

//Relative paths
const router = createBrowserRouter([
  {
    path: "/root",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
