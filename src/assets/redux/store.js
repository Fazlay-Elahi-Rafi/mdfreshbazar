import { createStore, combineReducers } from "redux";

import { ClickRedu } from "./reducers/clickRedu";

const root = combineReducers({
  ClickRedu,
});
const store = createStore(root);
export default store;
