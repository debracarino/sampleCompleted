/**
 * AddUser.jsx
 * component definition for the page that displays the form to add a new user
 * 
 * the form is going to send a fetch request (method POST) to http://localhost:3000/users
 * when the form is submitted
 * 
 * any time the data in the textboxes changes, we'll write the new textbox value into our state
 * variables
 * 
 * once the form is submitted, we'll prevent the default full-page refresh and instead send
 * the fetch request to the API
 * 
 */
import { useState } from 'react';

const AddUser =() => {
    const [newUserName, setNewUserName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        //put together a new user object
        const newUser = {
            "userName": newUserName,
            "email": newEmail
        };

        //send that data via the fetch function
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(data => setSuccess(data.message));

        setNewUserName("");
        setNewEmail("");
    }

    return(
        <>
            <h3>Create a New User</h3>
            <h3>{(success == "success")? "USER ADDED" : "Please fill out the form"}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="txtUserName">User Name: </label>
                <input type="text" id="txtUserName" name="txtUserName" value={newUserName}
                 required="required"   
                 onInput={(event) => setNewUserName(event.target.value)} />

                <br></br>

                <label htmlFor="txtEmail">Email: </label>
                <input type="email" id="txtEmail" name="txtUserName" value={newEmail}
                 required="required"
                 onInput={(event) => setNewEmail(event.target.value)} />

                <br></br>

                <input type="submit" id="btnSubmit" value="Add This User" />
            </form>
        </>
    )
}

export default AddUser;