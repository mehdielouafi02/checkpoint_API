import React, {  useEffect, useState } from 'react';
import axios from "axios"
import UserCard from './UserCard'
export default function UserList() {
    const [ listOfUsers, setListOfUsers]= useState([])
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res) => setListOfUsers(res.data))
          .catch((err) => console.log(err));
      }, []);
      
    return (<> 
    <h1 style={{color: "#ff8b3d"}} > Here's the list of Users</h1>
    <div style={{display:"flex", flexWrap:"wrap"}} >
        {listOfUsers.map((user, i) => <UserCard key={i} UserList={user}/>)}
    </div>
        </>
    )
    
}