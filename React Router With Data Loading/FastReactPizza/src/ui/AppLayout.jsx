import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
        {isLoading && <Loader />}
        <Header />
        <div className="overflow-auto">
          <main className="mx-auto max-w-3xl overflow-auto p-4 pb-5">
            <Outlet />
          </main>
        </div>
        <CartOverview />
      </div>
    </div>
  );
}
