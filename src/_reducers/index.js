//Step 4: store all reducer in rootReducer

import { combineReducers as rootReducer } from "redux";
import booklistReducer from './booklistReducer'
import itemsReducer from "./itemsReducer";

export default rootReducer({
  books: booklistReducer,
  items: itemsReducer,
})
