import React from "react";
import './ShowStyle.css';
import closeBtn from '../assets/gen034.svg'

type closeFunction = {
    onClose: VoidFunction
}

export default function ShowPosts(props: closeFunction): JSX.Element {

    const closeComponent = () => {
        props.onClose()
    }

    return(
        <div className="rootContainer">
                    <button className="btnClose" onClick={closeComponent}>
            <img className="ImageIcon" src={closeBtn}></img>
        </button>
            <h3 className="headlineDetails">Posts</h3>
            <ul>
                <li>Content comming from redux (posts)</li>
                <li>Post2</li>
                <li>Post3</li>
            </ul>
        </div>
    )
}