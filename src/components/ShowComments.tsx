import React from "react";
import './ShowStyle.css';
import closeBtn from '../assets/gen034.svg'

type closeFunction = {
    onClose: VoidFunction
}

export default function ShowComments(props: closeFunction): JSX.Element {

    const closeComponent = () => {
        console.log(props)
        props.onClose()
    }

    return(
        <div className="rootContainer">
        <button className="btnClose" onClick={closeComponent}>
            <img className="ImageIcon" src={closeBtn}></img>
        </button>
        <h3 className="headlineDetails">Comments</h3>
        <ul>
            <li>Content comming from redux (comments)</li>
            <li>Comment2</li>
            <li>Comment3</li>
        </ul>
    </div>
    )
}