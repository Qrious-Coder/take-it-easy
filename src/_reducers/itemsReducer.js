import { GET_ITEM_LIST, ADD_NEW_ITEM } from "../_actions";
const initState = {
  "type": '',
  "itemName": ''
}

export default function itemsReducer( state= initState, action) {
  switch(action.type){
    case GET_ITEM_LIST:
      // console.log('dispatch addItem',action.payload)
      return action.payload;
    case ADD_NEW_ITEM:
      console.log('dispatch addItem',action.payload)
      return {
        "type": action.payload.type,
        "itemName": action.payload.name
      };
    default:
      return state
  }
}

