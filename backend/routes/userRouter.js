/** -----------------------
 * userRouter.js
 * 
 * define the routes (method + path) the api responds to.
 * note that each path defined here assumes that /users has been typed in
 */

//imports
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');
const userController = require('../controllers/userController');

//method    =   GET
//path      =   http://localhost:3000/users
//response  =   full list of all users in collection
router.get("/", (request, response) => {
    userController.getAllUsers(request, response);
});

//method    =   GET
//path      =   http://localhost:3000/users/:theUserName
//response  =   user data for the document that matches the username
router.get("/:theUserName", userController.getUserByName);

//method    =   POST
//path      =   http://localhost:3000/users
//response  =   add user data to collection and return success message
router.post("/", userController.addUser);

//method    =   DELETE
//path      =   http://localhost:3000/users/:theUserId
//response  =   remove user data from collection and return success message
router.delete("/:theUserId", (request, response) => {
    userController.deleteUser(request, response)
});

//method    =   PUT
//path      =   http://localhost:3000/users/:theUserId
//response  =   edit user data in collection and return success message
router.put("/:theUserId", userController.editUser);

module.exports = router;