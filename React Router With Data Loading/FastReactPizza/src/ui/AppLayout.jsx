import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <SearchOrder />
          <main>
            <Outlet />
          </main>
          <CartOverview />
        </div>
      )}
    </div>
  );
}
