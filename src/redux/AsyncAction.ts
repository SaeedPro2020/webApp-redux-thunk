import { FETCH_USER_PENDING, FETCH_USER_FULFILLED, FETCH_USER_REJECTED } from "./actions";

import { AppActions } from "./appActions";
import { defaultState } from "./reducer";
import { Dispatch } from "redux";
import { userType } from "../components/UserProfile";
import { store } from "./store";

const requestUser = (): AppActions => {
    return {
        type: FETCH_USER_PENDING,
        user: defaultState,
    };
};

const returnUser = (json: userType): AppActions => {
    return {
        type: FETCH_USER_FULFILLED,
        user: { ...json },
    };
};

const errorUser = (): AppActions => {
    return {
        type: FETCH_USER_REJECTED,
        user: {
            id: -1,
            name: 'error',
            email: 'error',
            gender: 'error',
            status: 'error'
        },
    };
};

export function fetchUser() {
    return (dispatch: Dispatch) => {
        dispatch(requestUser());

        let hasErrored = false;

        return fetch('https://gorest.co.in/public/v2/users').then((response) => response.json(),
            (error) => {
                console.log(error);
                hasErrored = true;
                dispatch(errorUser());
    }
    ).then((json) => {
        if (!hasErrored){
        dispatch(returnUser(json))
        }     
    })
    };
}

export const boundFetchUser = () => store.dispatch(fetchUser());