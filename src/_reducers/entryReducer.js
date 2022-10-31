import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../_actions";

const initState = {
  isAuth: false,
  user: {
    email: '',
    password: ''
  }
}

const AuthReducer = ( state = initState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user:{
          email: action.payload.email,
          password: action.payload.password
        }
      }
    case LOGOUT_SUCCESS:
      return{
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}

export default AuthReducer