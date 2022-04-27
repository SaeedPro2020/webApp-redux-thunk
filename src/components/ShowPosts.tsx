import React from "react";
import './ShowStyle.css';
import closeBtn from '../assets/gen034.svg'
import { PostModel } from "../redux/models/PostModel";
import { PostState } from "../redux/reducers/PostReducer";

type propsParm = {
    onClose: VoidFunction,
    onQueryParm: number,
    onData: PostState
}

export default function ShowPosts(props: propsParm): JSX.Element {


    const closeComponent = () => {
        console.log(props.onQueryParm)
        props.onClose()
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
                    </div>
                ))}

            </ul>
        </div>
    )
}