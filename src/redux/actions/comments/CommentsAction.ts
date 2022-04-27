import {Dispatch} from "redux";
import {COMMENT_LOADING, COMMENT_FAIL, COMMENT_SUCCESS, CommentDispatchTypes} from "./asyncActions";
import axios from "axios";


export const GetComments = (queryParm: number) => async (dispatch: Dispatch<CommentDispatchTypes>) => {
  try {
    dispatch({
      type: COMMENT_LOADING,
      comments: []
    })

    const res = await axios.get(`https://gorest.co.in/public/v2/posts/${queryParm}/comments`);

    dispatch({
      type: COMMENT_SUCCESS,
      comments: res.data
    })

  } catch(e) {
    dispatch({
      type: COMMENT_FAIL,
      comments: []
    })
  }
};