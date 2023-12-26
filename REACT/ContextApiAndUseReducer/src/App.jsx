import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    /*shopping-cart-context'te komponent fonskiyonu oluşturup burda tag olarak çağırdık. Birden fazla context apinin kullasnıldığı kompleks uygulamalarda context api ile geçilecek stateleri ve kullanılacak fonskiyonları context komponentlerine bölmek daha iyi olur */
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
