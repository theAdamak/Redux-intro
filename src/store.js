import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
// store.dispatch({ type: "account/deposit", payload: 1000 });
// console.log(store.getState());
// store.dispatch({
//   type: "account/reqestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "vacation",
//   },
// });
// console.log(store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());
export default store;
