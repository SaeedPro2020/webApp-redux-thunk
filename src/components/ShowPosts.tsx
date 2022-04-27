import React, { useState } from "react";
import './ShowStyle.css';
import closeBtn from '../assets/gen034.svg'
import { PostModel } from "../redux/models/PostModel";
import { PostState } from "../redux/reducers/PostReducer";
import { useDispatch, useSelector } from "react-redux";
import { GetComments } from "../redux/actions/comments/CommentsAction";
import { AppState } from "../redux/rootStore";
import ShowComments from "./ShowComments";

type propsParm = {
    onClose: VoidFunction,
    onData: PostState
}

export default function ShowPosts(props: propsParm): JSX.Element {

    const dispatch = useDispatch();
    const [btnComment, setBtnComment] = useState(false)
    const [postId, setpostId] = useState(0)

    const commentState = useSelector((state: AppState) => state.commentReducer);
    
    const closeComponent = () => {
        props.onClose()
    }

    const userComments = (postId: number) => {
        setBtnComment(true)
        setpostId(postId)
        dispatch(GetComments(postId) as any)
        //Perform a redux action to fetch and do a simple query for this user ==> get user "comments" info
    }

    return(
        <div className="rootContainer">
            <button className="btnClose" onClick={closeComponent}>
                <img className="ImageIcon" src={closeBtn}></img>
            </button>

            <h3 className="headlineDetails">Posts</h3>
            <ul>
                {props.onData?.posts?.map((postData: PostModel) => (
                    <div key={postData.id}>
                        <li className="postLists">
                            {"Title: " + postData?.title}
                        </li>
                        <li className="postLists">{"Body" + postData?.body}</li>

                        <button className="Buttons" onClick={() => userComments(postData.id)}>
                            <p className="btnText">Comments</p>
                        </button>
                    </div>
                ))}

            </ul>

            {commentState.loading === true ?
                <h3 className="detailsContainer">...Loading</h3>
                :
                <div>
                    {btnComment && commentState?.comments[0]?.post_id === postId ?
                            <div className="detailsContainer">
                                <ShowComments onClose={() => setBtnComment(false)}
                                onData={commentState}/>
                            </div>
                    :
                        <></>
                    }

                </div>
            }
        </div>
        
    )
}