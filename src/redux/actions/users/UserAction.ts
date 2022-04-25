import  { Dispatch } from 'redux';

import { AppActions } from './actions';

import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from './asyncActions';
import { UserModel } from '../../models/UserModel';

const requestUsers = (): AppActions => ({
    type: FETCH_USER_REQUEST,
    loading: true,
    users: [],
    error:'',
})

const receiveUsers = (user: UserModel[]): AppActions => ({
    type: FETCH_USER_SUCCESS,
    loading: false,
    users: user,
    error:'',
})

const invalidateUsers = (): AppActions => ({
    type: FETCH_USER_FAILURE,
    loading: false,
    users: [],
    error:'Unable to fetch data',
})

export const boundRequestUsers = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(requestUsers());
        return fetch('https://gorest.co.in/public/v2/users').then((response) =>
        response.json(),
        (error) => {
            console.log(error);
            dispatch(invalidateUsers());
            }
        ).then((json) => dispatch(receiveUsers(json)))
    }
}