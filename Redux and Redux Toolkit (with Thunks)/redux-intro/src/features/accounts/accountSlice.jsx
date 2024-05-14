import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};
const host = "api.frankfurter.app";

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return state;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state) {
      state.loanPurpose = "";
      state.balance -= state.loan;
      state.loan = 0;
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });
    //API call
    const res = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await res.json();
    const converted = data.rates.USD;
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

// const host = "api.frankfurter.app";

// export default function accountReducer(
//   state = initialState,
//   { type, payload }
// ) {
//   switch (type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + payload, isLoading: false };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       // Later
//       return {
//         ...state,
//         loan: payload.amount,
//         loanPurpose: payload.purpose,
//         balance: state.balance + payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// //Action Creator Functions
// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });
//     //API call
//     const res = await fetch(
//       `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
//     );

//     const data = await res.json();
//     const converted = data.rates.USD;
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return { type: "account/requestLoan", payload: { amount, purpose } };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }
