//Step 4: store all reducer in rootReducer

import { combineReducers as rootReducer } from "redux";
import booklistReducer from './booklistReducer'

export default rootReducer({
  books: booklistReducer
})
