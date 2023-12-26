import { createSlice } from "@reduxjs/toolkit";

//yeni slice için başlangıç değerleri
const initialAuthState = {
  isAuthenticated: false,
};

//Kullanıcı girişi içib yeni bir slice yaratıldı
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
//auth actionsları da exportlandı
export const authActions = authSlice.actions;
export default authSlice.reducer;
