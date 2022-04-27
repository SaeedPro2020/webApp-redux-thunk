import React, { useState } from "react";
import './UserProfile.css'
import imageProfile from '../assets/blank.png'
import mailIcon from '../assets/empty-email.svg'
import maleAvetar from '../assets/009-boy-4.svg'
import femaleAvetar from '../assets/013-girl-6.svg'
import activeStatus from '../assets/activeIcon.png'
import inactiveStatus from '../assets/inactive.jpg'
import { UserModel } from "../redux/models/UserModel";
import ShowPosts from "./ShowPosts";
import ShowComments from "./ShowComments";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../redux/actions/posts/PostsAction";
import { AppState } from "../redux/rootStore";

export default function UserProfile(props: UserModel): JSX.Element {

    const [btnPost, setBtnPost] = useState(false)
    const [btnComment, setBtnComment] = useState(false)

    const dispatch = useDispatch();

    const postState = useSelector((state: AppState) => state.postReducer);

    
    const userPosts = () => {
        setBtnPost(true)
        setBtnComment(false)
        dispatch(GetPosts(props.id) as any)
    }

    const userComments = () => {
        setBtnComment(true)
        setBtnPost(false)
        //Perform a redux action to fetch and do a simple query for this user ==> get user "comments" info
    }
    
    return(

    <div className="rootElement">

        <div className="UserProfile">
           
            <img className="ImageProfile" src={imageProfile}></img>
            
            <div className="textDetails">
                <h3 className="UserName">{props.name}</h3>

                <div className="IconText">
                    <img className="ImageIcon" src={mailIcon}></img>
                    <p className="OtherDetails">{props.email}</p>
                </div>

                <div className="IconText">
                    {props.gender === "male" ?
                    <img className="ImageIcon" src={maleAvetar}></img>
                    :
                    <img className="ImageIcon" src={femaleAvetar}></img>
                    }
                    <p className="OtherDetails">{props.gender}</p>
                </div>

                <div className="IconText">
                    {props.status === "active" ?
                    <img className="ImageIcon" src={activeStatus}></img>
                    :
                    <img className="ImageIcon" src={inactiveStatus}></img>
                    }
                    <p className="OtherDetails">{props.status}</p>
                </div>

                <div className="btnsContainer">
                    <button className="Buttons" onClick={userPosts}>
                        <p className="btnText">Posts</p>
                    </button>

                    <button className="Buttons" onClick={userComments}>
                        <p className="btnText">Comments</p>
                    </button>
                </div>

            </div>


        </div>

        {postState.loading === true ?
             <h3 className="detailsContainer">...Loading</h3>
             :
            <div>
                {btnPost && !btnComment && postState?.posts[0]?.user_id === props.id ?
                <div className="detailsContainer">
                    <ShowPosts onClose={() => setBtnPost(false)}
                        onQueryParm={props.id}
                        onData={postState}/>
                </div>
            :
            !btnPost && btnComment ?
                <div className="detailsContainer">
                    <ShowComments onClose={() => setBtnComment(false)}
                        onQueryParm={props.id}/>
                </div>
            :
            <></>
                }

            </div>

        }


    </div>
    )
}