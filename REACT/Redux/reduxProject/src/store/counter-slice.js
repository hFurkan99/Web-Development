import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //her slice ın bir adı olmalı
  initialState: initialCounterState, //başlangıç değerleri, yukardaki initialstate

  //Bu slice'ın ihtiyaç duyduğu tüm fonksiyonlar
  reducers: {
    //state bölümünde güncel state değerleri tutulur.
    //İşlem tipini almak için action yazmaya gerek yok
    increment(state) {
      state.counter++; //redux toolkit bu tarz kullanımlarda otomatik olarak güncel state'in kopyasını alıyor ve en son bu kopya state objesini yeni state olarak üzerine yazıyor. Orijinal state bozulmasın diye manuel kopya almaya gerek yok.
    },
    decrement(state) {
      state.counter--;
    },
    //işlem tipi dışında başka bir dataya ihtiyaç olursa action yazılmalı.
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//Counter actionları da exportlandı
export const counterActions = counterSlice.actions;

//Burada slice ın reducer ını exportluyorum ki index.js'te reduceların merge işlemin de direkt olarak kullanabileyim (counter: counterslice.reducer yazmak yerine -> counter: counterReducer)
export default counterSlice.reducer;
