import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { ClickRedu } from "./reducers/clickRedu";
import ProductRedu from "./reducers/productRedu";
import { CartReducer } from "./reducers/cartReducer";
import { FilterReducer } from "./reducers/filterReducer";

const root = combineReducers({
  ClickRedu,
  ProductRedu,
  CartReducer,
  FilterReducer,
});

const middleware = [thunk];
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
