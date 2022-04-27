import React from "react";
import './ShowStyle.css';
import closeBtn from '../assets/gen034.svg'
import { CommentModel } from "../redux/models/CommentModel";
import { CommentState } from "../redux/reducers/CommentReducer";

type propsParm = {
    onClose: VoidFunction,
    onData: CommentState
}
// 
export default function ShowComments(props: propsParm): JSX.Element {

    const closeComponent = () => {
        props.onClose()
    }

    return(
        <div className="rootContainer">
            <button className="btnClose" onClick={closeComponent}>
                <img className="ImageIcon" src={closeBtn}></img>
            </button>
        <h3 className="headlineDetails">Comments</h3>
        <ul>
            {props.onData?.comments?.map((postData: CommentModel) => (
                <div key={postData.id}>
                <li className="postLists">
                    {"Name: " + postData?.name}
                </li>
                <li className="postLists">{"Body" + postData?.body}</li>
                </div>
                ))}
        </ul>
    </div>
    )
}