import {COMMENT_LOADING, COMMENT_FAIL, COMMENT_SUCCESS, CommentDispatchTypes} from '../actions/comments/asyncActions';

import { CommentModel } from '../models/CommentModel';

export interface CommentState {
    loading: boolean;
    comments: CommentModel[];
}

const defaultState: CommentState = {
    loading: false,
    comments: []
}
// 
export const commentReducer = (state = defaultState, action: CommentDispatchTypes): CommentState => {
    switch(action.type) {
        case COMMENT_LOADING:
            return { loading: true, comments:[] }
        case COMMENT_SUCCESS:
            return { loading: false, comments: action.comments}
        case COMMENT_FAIL:
            return { loading: false, comments:[] }
        default:
            return state;
    }
}