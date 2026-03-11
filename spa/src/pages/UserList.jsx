/*  UserList.jsx
    Page component that requests data from the backend API in order
    to populate the page with user details

    We will use a fetch command to retrieve data from the API and then 
    store in a state variable --> we need to import both the useEffect
    and useState functions from React.
*/
import { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";

const UserList =() => {
    //no need for the users state variable, since we'll retrieve the data via useFetch
    const { data, message, loading, error } = useFetch("http://localhost:3000/users");

    if (loading) return <p>Please wait...we're retrieving your data</p>
    if (error)   return <p>Apologies, there is an issue: {error}</p>

    return(
        <>
            <h3>Current Users</h3>
            {
                data.map( user => (
                    <div key={user._id} className="userDiv">
                        <h4>{user.userName}</h4>
                        <p><a href={"mailto:" + user.email}>{user.email}</a></p>
                        <p>Member since {user.joinDate}</p>
                    </div>
                ))
            }
        </>
    )
}

export default UserList;