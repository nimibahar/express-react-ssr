import axios from 'axios';
import { FETCH_USERS } from './types';

//example action
export const fetchUsers = () => async dispatch => {
  const res = axios.get('http://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
