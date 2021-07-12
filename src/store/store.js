import { createStore, combineReducers } from "redux";

//Session
import { authReducer } from "../reducers/authReducer";

import { modalReducer } from "../reducers/modalReducer";
import { snackBarReducer } from "../reducers/snackBarReducer";

//Fetching data
import { tcgPlayerReducer } from "../reducers/tcgPlayerReducer";

const reducers = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  snackbar: snackBarReducer,
  tcgPlayer: tcgPlayerReducer
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
