import { LOGIN_SUCCES, LOGOUT_SUCCESS } from "./";

const getLogin = ( payload ) => {
  return { type: LOGIN_SUCCES, 
    payload: {
      email: payload.email,
      password: payload.password
  }}
}

const getLogout = () => {
  return  { type: LOGOUT_SUCCESS }
}

export const entryACtions = {
  getLogin,
  getLogout
}