import { userType } from "../components/UserProfile";

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';

interface PendingAction {
    type: typeof FETCH_USER_PENDING;
    user: userType;
}

interface FullfilledAction {
    type: typeof FETCH_USER_FULFILLED;
    user: userType;
}

interface RejectedAction {
    type: typeof FETCH_USER_REJECTED;
    user: userType;
}

export type AsyncActionTypes = PendingAction | FullfilledAction | RejectedAction 