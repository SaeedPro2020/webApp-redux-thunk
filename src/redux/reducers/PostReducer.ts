import {POST_FAIL, POST_LOADING, POST_SUCCESS, PostDispatchTypes} from '../actions/posts/asyncActions';

import { PostModel } from '../models/PostModel';

export interface PostState {
    loading: boolean;
    posts: PostModel[];
}

const defaultState: PostState = {
    loading: false,
    posts: []
}
// 
export const postReducer = (state = defaultState, action: PostDispatchTypes): PostState => {
    switch(action.type) {
        case POST_LOADING:
            return { loading: true, posts:[] }
        case POST_SUCCESS:
            return { loading: false, posts: action.posts}
        case POST_FAIL:
            return { loading: false, posts:[] }
        default:
            return state;
    }
}