import { get } from 'axios';
export const FETCH_BOOKLIST = 'FETCH_BOOKLIST';

//***Step 1: ActionCreator: a function that return an object {type:..., payload: ...}

export function fetchBooklist() {
  return function(dispatch) {
    return get('http://localhost:5000/books')
      .then(function(res) {
        dispatch({type: FETCH_BOOKLIST, payload: res.data})
      })
      .catch(err => { console.log('error', err); });
  };
 }