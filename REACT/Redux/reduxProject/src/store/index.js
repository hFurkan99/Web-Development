import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

//configureStore -> reducer keyi içerisindeki reducerları birleştirip yeni ve geniş kapsamlı bir reducer oluşturmayı sağlar
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
