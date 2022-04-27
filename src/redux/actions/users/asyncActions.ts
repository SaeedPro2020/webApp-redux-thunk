import { UserModel } from '../../models/UserModel';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

interface UserAsync {
    loading: boolean;
    users: UserModel[];
    error: string;
}

interface FetchUsersRequest extends UserAsync {
    type: typeof FETCH_USER_REQUEST;
}

interface FetchUsersSuccess extends UserAsync {
    type: typeof FETCH_USER_SUCCESS;
}

interface FetchUsersFailure extends UserAsync {
    type: typeof FETCH_USER_FAILURE;
}

export type UserActionTypes = FetchUsersRequest | FetchUsersSuccess | FetchUsersFailure;