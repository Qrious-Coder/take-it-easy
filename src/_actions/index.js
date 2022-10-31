import axios, { get, post } from 'axios';
import { postItemsAPI } from '../_service/index,js';
export const FETCH_BOOKLIST = 'FETCH_BOOKLIST';


// item actions
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
export const GET_ITEM_LIST = 'GET_ITEM_LIST'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

//***Step 1: ActionCreator: a function that return an object {type:..., payload: ...}

// export function getItemList(payload) {
//   return function(dispatch) {
//     return axios.post('http://localhost:5000/items', { payload})
//   };
// }

export function fetchBooklist() {
  return function(dispatch) {
    return get('http://localhost:5000/books')
      .then(function(res) {
        dispatch({type: FETCH_BOOKLIST, payload: res.data})
      })
      .catch(err => { console.log('error', err); });
  };
 }