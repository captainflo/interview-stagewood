import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, FETCH_USER } from './types';

//////////////////////////////// Authentification //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
// Signup
export const signup = (formProps, callback) => async (dispatch) => {
  console.log(formProps);
  callback();
};

// Signin
export const signin = (formProps, callback) => async (dispatch) => {
  console.log(formProps);
  callback();
};

// Signout
export const signout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_USER, payload: '' });
};

// fetch User
export const fetchUser = () => async (dispatch) => {
  const token = { token: localStorage.token };
  const res = await axios
    .post('/api/user', token)
    .then(
      async (response) => await axios.get(`/api/user/${response.data.sub}`)
    );
  dispatch({ type: FETCH_USER, payload: res.data });
};
