import { apiPost, apiGet, apiReq, apiPut } from '../utils';

export function loginAPI(user) {
    return apiPost('/login', user);
}