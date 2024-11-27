import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
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
