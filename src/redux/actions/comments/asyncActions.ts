import { CommentModel } from '../../models/CommentModel';

export const COMMENT_LOADING = "COMMENT_LOADING";
export const COMMENT_FAIL = "COMMENT_FAIL";
export const COMMENT_SUCCESS = "COMMENT_SUCCESS";

export type CommentsType = {
    comments: CommentModel[]
}

interface FetchCommentsRequest extends CommentsType {
    type: typeof COMMENT_LOADING;
}

interface FetchCommentsSuccess extends CommentsType {
    type: typeof COMMENT_SUCCESS;
}

interface FetchCommentsFailure extends CommentsType {
    type: typeof COMMENT_FAIL;
}

export type CommentDispatchTypes = FetchCommentsRequest | FetchCommentsSuccess | FetchCommentsFailure;