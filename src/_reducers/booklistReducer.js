//Step 3: import action and create reducer to update state
import { FETCH_BOOKLIST } from '../_actions'

const initState = []

export default function booklistReducer( state= initState, action) {
  switch(action.type){
    case FETCH_BOOKLIST:
      console.log('dispatch action fetchBooklist()',action.payload)
      return action.payload;
    default:
      return state
  }
}