import React, { useEffect } from "react";
import './ShowStyle.css';
import closeBtn from '../assets/gen034.svg'
import { AppState } from '../redux/rootStore';
import { useDispatch, useSelector } from "react-redux";
import { PostModel } from "../redux/models/PostModel";
import { GetPosts } from "../redux/actions/posts/PostsAction";

type propsParm = {
    onClose: VoidFunction,
    onQueryParm: number
}

export default function ShowPosts(props: propsParm): JSX.Element {

    const dispatch = useDispatch();

    const postState = useSelector((state: AppState) => state.postReducer);

    const closeComponent = () => {
        console.log(props.onQueryParm)
        props.onClose()
        console.log(postState)
    }

    useEffect(() => {
        dispatch(GetPosts(props.onQueryParm) as any)
    },[!postState])

    return(
        <div className="rootContainer">
                    <button className="btnClose" onClick={closeComponent}>
            <img className="ImageIcon" src={closeBtn}></img>
        </button>
            <h3 className="headlineDetails">Posts</h3>
            <ul>
                {postState?.posts?.map((postData: PostModel) => (
                    <li key={postData.id}>{postData?.title}</li>
                ))}
                {/* // <li>Content comming from redux (posts)</li>
                // <li>Post2</li>
                // <li>Post3</li> */}
            </ul>
        </div>
    )
}