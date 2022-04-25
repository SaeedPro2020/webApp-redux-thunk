import React, { useEffect, useState } from "react";
import { userComments, userDetails, userPosts } from "./api/UserRepo";
import "./App.css";
import UserProfile from "./components/UserProfile";
import { Button } from "./stories/Button";
import {userType} from './components/UserProfile'

function App() {
  const userData: userType[] = []
  const [listOfUsers, setListOfUsers] = useState(userData)

  const getListOfUsers = async () => {
    try{
      const ourData = await userDetails()
      console.log(ourData.data)
      setListOfUsers(ourData.data)
    } catch (error){
      console.log(error)
    }
  }

  const logPosts = async () => {
    try{
      const ourData = await userPosts()
      console.log(ourData)
    } catch (error){
      console.log(error)
    }
  }

  const logComments = async () => {
    try{
      const ourData = await userComments()
      console.log(ourData)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    getListOfUsers()
  },[!listOfUsers])

  return (
    <div className="App">
      {/* <Button onClick={logPosts} label={"Posts"} />
      <Button onClick={logComments} label={"Comments"} /> */}
      {listOfUsers.map((cardData, i) =>(
        <UserProfile key={i} id={cardData.id} name={cardData.name}
        email={cardData.email} gender ={cardData.gender}
        status={cardData.status}/>
      ))}
    </div>
  );
}

export default App;
