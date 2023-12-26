import { createContext, useReducer } from "react";
export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //Eklenen item daha önceden varsa, var olan itemın indeksi bulunur.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //Orijinal dizinin değişmemesi için item dizisinin kopyası alındı.
    const updatedItems = [...state.items];

    //Elaman daha önceden varsa quantitysine 1 eklenecek
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    //item ilk kez eklenmişse, seçilen itemın özellikleri ile birlikte değeri 1 olacak şekilde quantity özelliği yeni bir obje halinde updatedItems dizisinde depolanır.
    else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    //Seçilen itemın indexi bulunur
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    //İndex yardımıyla itemın kendisi bulunur ve kopyası oluşturulur.
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    //Itemdan sadece bir tane varsa
    if (existingCartItem.quantity === 1) {
      //item diziden splice ile çıkartılır.
      updatedItems.splice(existingCartItemIndex, 1);
    }
    //Birden fazla varsa
    else {
      //quantitysi bir azaltılıp updatedItem değişkeninde saklanır
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      //Kopyanın seçilen indexine quantitysi azaltılan item yeni haliyle eklenir.
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  //Sipariş sonrası itemleri temizleme
  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] }); //cartReducer -> dispatch ile çağırılacak fonksiyon, {items: []} -> state'in başlangıç değeri.

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  //   console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
