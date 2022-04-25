import { userType } from '../components/UserProfile';
import { AsyncActionTypes } from './actions';

export const defaultState: userType = {
    id: 0,
    name: '',
    email: '',
    gender: '',
    status: ''
}

export const asyncReducer = (
    state = defaultState,
    action: AsyncActionTypes
) => {


    switch (action.type){
        case 'FETCH_USER_PENDING':
            return { ...state };

        case 'FETCH_USER_FULFILLED':
            return { ...action.user };

        case 'FETCH_USER_REJECTED':
            return { ...action.user };
        default:
            return state

    }
}