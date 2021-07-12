import { createStore, combineReducers } from "redux";

import { modalReducer } from "../reducers/modalReducer";
import { snackBarReducer } from "../reducers/snackBarReducer";

const reducers = combineReducers({
  modal: modalReducer,
  snackbar: snackBarReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
