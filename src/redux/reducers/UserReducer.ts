import { UserActionTypes, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/users/asyncActions';

import { UserModel } from '../models/UserModel';

interface UserState {
    loading: boolean;
    users: UserModel[];
    error: string;
}

const defaultState: UserState = {
    loading: false,
    users: [],
    error:''
}

export const userReducer = (state = defaultState, action: UserActionTypes): UserState => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return { loading: true, users:[], error:'' }
        case FETCH_USER_SUCCESS:
            return { loading: false, users: action.users, error:'' }
        case FETCH_USER_FAILURE:
            return { loading: false, users:[], error:action.error }
        default:
            return state;
    }
}