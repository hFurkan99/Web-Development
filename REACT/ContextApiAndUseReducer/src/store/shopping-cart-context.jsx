import { createContext, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {}, //app'ten childlara geçeceğim fonkisyounun propname ini buraya da ekledim. Oto tamamlama için.
  updateItemQuantity: () => {},
});

//Komponent dışında usereducer için fonksiyon
function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //State güncelleme fonksiyonunu direkt buraya taşıdım.

    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload // normal fonksiyonda buraya gelen id, dispatch içinde payload key ine atandığı için artık action.payload
      //Tüm id olan yerler bu şekilde değiştirildi.
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, //Verileri kaybetmemek için buraya eklemeyi unutma. Şu an tek bir değeri güncelledik gerekli değil ama birden fazla key:value eşi olursa ve bu kullanılmazsa güncellenmeyen veriler kaybolur.
      items: updatedItems,
    };
  } else if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

function CartContextProvider({ children }) {
  //Dispatch içine girilen değerler action'a argüman olarak yazılır. Yukardaki useReducer fonksiyonundaki state'in argümanı ise shoppingCartState'tir.
  // İlk eleman state'i ikinci eleman action'ı tutar ve action'a yapılacak işlemin tipi type key'e value olarak yazılır. İçerisinde bulunan diğer fonksiyonlarda kullanılacak argümanlar da dispatch içerisinde payload adında yeni bir objenin içerisine key:value şeklinde yazılır. useReducer içindeki shoppingCartReducer komponent fonksiyonu dışında tanımlanmıştır ve her dispatchten sonra solundaki değerleri state ve action'a argüman olarak geçerek çalşır. Fonksiyondan sonra ise ilk değer obje olarak girilmiştir.
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  //Bu fonskiyona gelindiği zaman içerisindeki dispatch bizi en yukardaki  shoppingCartReducer fonksiyonuna götürecek ve orda item eklenecek
  function handleAddItemToCart(id) {
    //Dispatch.
    //İçerdeki usereducer içindeki action parametresşne argğman olarak atanacak
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId, //productId: productId,
        amount, //amount: amount
      },
    });
  }

  // Context api ile içerdeki komponentlere bu değerleri taşımak için keyleyip bir obje içine gömüp context api value'su içinde child elemtlere yolladık.
  //İhtiyacı olan shild element bu değer usecontext ile kullanacak.
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    /*Context api yardımıyla geçeceğimiz değerleri saracak şekilde contexti provider ile en kapsayıcı tage yazdık*/
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export default CartContextProvider;
