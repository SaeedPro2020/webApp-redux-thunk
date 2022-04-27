import { PostModel } from '../../models/PostModel';

export const POST_LOADING = "POST_LOADING";
export const POST_FAIL = "POST_FAIL";
export const POST_SUCCESS = "POST_SUCCESS";

export type PostsType = {
    posts: PostModel[]
}

interface FetchPostsRequest extends PostsType {
    type: typeof POST_LOADING;
}

interface FetchPostsSuccess extends PostsType {
    type: typeof POST_SUCCESS;
}

interface FetchPostsFailure extends PostsType {
    type: typeof POST_FAIL;
}

export type PostDispatchTypes = FetchPostsRequest | FetchPostsSuccess | FetchPostsFailure;