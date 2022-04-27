import {Dispatch} from "redux";
import {POST_FAIL, POST_LOADING, POST_SUCCESS, PostDispatchTypes} from "./asyncActions";
import axios from "axios";


export const GetPosts = (queryParm: number) => async (dispatch: Dispatch<PostDispatchTypes>) => {
  try {
    dispatch({
      type: POST_LOADING,
      posts: []
    })

    const res = await axios.get(`https://gorest.co.in/public/v2/users/${queryParm}/posts`);

    dispatch({
      type: POST_SUCCESS,
      posts: res.data
    })

  } catch(e) {
    dispatch({
      type: POST_FAIL,
      posts: []
    })
  }
};