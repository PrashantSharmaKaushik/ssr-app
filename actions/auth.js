import types from '../types';
import store, { initStore } from '../store';
import {
    loginAPI
} from '../api/auth';

const { dispatch } = store;

const addCount = () => {
    return { type: types.AUTH_LOGIN };
  
};

export default { addCount };

export function login(payload) {
    dispatch({
        type: types.AUTH_LOGIN
    });

    return new Promise((resolve, reject) => loginAPI(payload)
        .then(res => {
            dispatch({
                type: types.AUTH_SUCCESS,
                payload: res
            });

            return resolve(res);
        })
        .catch(err => {
            dispatch({
                types: types.AUTH_FAILED
            });

            return reject(err);
        })
    )
}