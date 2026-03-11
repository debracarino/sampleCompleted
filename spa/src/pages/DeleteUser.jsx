/**
 *  DeleteUser.jsx
 *  Component definition for the delete user "page"
 * 
 *  Our API only has a delete by ID option
 *  Users are going to HAVE to pick which user to delete using the _id value from the DB
 *        Some options to make it friendlier-
 *        we could query the data from the API using the GET request to http://localhost:3000/users
 *        and then use that data to build a human-friendly form interface
 *         <select value="state variable that stores the ID of the selected Item"
 *                 onchange="set the state variable to the ID of the selected item">
 *              <option value="the actual ID here">the username here</option>
 *         </select>
 */
import { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";
import  { Link } from 'react-router-dom';

const DeleteUser = () => {
    const [deleteId, setDeleteId] = useState("");
    //again, no need for the users state variable here - we're using
    // the useFetch to populate the DDL 
    // const [users, setUsers] = useState([]);
    const [deleteSuccess, setDeleteSuccess] = useState("");
    const [deletedUserData, setDeletedUserData] = useState({})

    const { data, message, loading, error } = useFetch("http://localhost:3000/users");

    
    //carry out deletion once form is submitted
    const handleSubmit = (event) => {
        event.preventDefault();

        //send a delete request to the API
        //send the request to http://localhost:3000/users/:theUserId
        fetch("http://localhost:3000/users/" + deleteId, 
            {method: "DELETE"}
        )
        .then(response => response.json())
        .then((data) => {
            setDeleteSuccess(data.message);
            setDeletedUserData(data.userDeleted);
        });
    }

    //when users click the 'delete another user" link we want to reset our state variables to their
    //empty, default values
    const handleClick = (event) => {
        setDeleteSuccess("");
        setDeletedUserData({});
    }

    if (loading) return <p>Please wait...we're retrieving your data</p>
    if (error)   return <p>Apologies, there is an issue: {error}</p>
    //for VERY different pages depending on object success, create a separate logical structure and return a whole new set of 
    //HTML elements
    if (deleteSuccess == "success" && deletedUserData !== null && typeof deletedUserData === "object") return (
        <>
        <h2>Record DELETED</h2>
        <p>User deleted: {deletedUserData.userName}</p>
        <p>User ID:      {deletedUserData._id}</p>
        <p><Link to="/deleteuser" onClick={handleClick}>Delete Another User</Link></p>
        </>
    )

    return(
        <>
            <h3>Delete Users</h3>
            <p>Deleting user# {deleteId}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="selDelete">Select a user to delete:</label>
                <select id="selDelete" onChange={(event) => setDeleteId(event.target.value)}>
                    {
                        data.map(user => (
                            <option key={user._id} value={user._id}>{user.userName}</option>
                        ))
                    }
                </select>
                <input type="submit" name="btnSubmit" id="btnSubmit" value="Delete Selected User" />
            </form>
        </>
    )
}

export default DeleteUser;