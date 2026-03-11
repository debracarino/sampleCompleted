/**-----------------------------
 * userController.js 
 * 
 * define all the functions needed to interact with the user collection
 * in our database 
 * ----------------------------- */ 
const User = require('../models/User');

//get the whole collection of users
exports.getAllUsers = async (request, response) => {
    try {
        const users = await User.find();
        //the returned JSON is the array of users directly
        //in our front end, we didn't have to "drill-down" into the JSON response to get to the data
        //response.status(200).json(users);
        response.status(200).json({"msg": "Users retrieved", "users": users});
    }
    catch (errMsg) {
        response.status(500).json({ error: "Server error - " + errMsg });
    }
}

//get one user by userName
exports.getUserByName = async(request, response) => {
    const theName = request.params.theUserName;
    if(theName) {
        try {
            const user = await User.find({userName: theName});
            response.status(200).json(user);
        }
        catch (errMsg) {
            response.status(400).json({error: "No such user or server error - " + errMsg});
        }
    }
}

//get just the id for a user by userName
exports.getUserId = async(request, response) => {
    const theName = request.query.userName;

    if(theName) {
        try {
            const userId = await User.find({userName: theName}, {_id});
            response.status(200).json(userId);
        }
        catch (errMsg) {
            response.status(400).json({error: "No such user or server error - " + errMsg});
        }
    }
}

//add a user
exports.addUser = async(request, response) => {
    const {userName, dateJoined, email} = request.body;
    try {
        const result = await User.create({userName, dateJoined, email});
        response.status(201).json({message: "success", userAdded: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}

//delete a user by id
exports.deleteUser = async(request, response) => {
    const theId = request.params.theUserId;
    try {
        const result = await User.findByIdAndDelete(theId);
        response.status(200).json({message: "success", userDeleted: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}

//edit a user by id
exports.editUser = async(request, response) => {
    const theId = request.params.theUserId;
    const updatedUser = request.body;
    console.log(updatedUser);
    try {
        const result = await User.findByIdAndUpdate(theId, updatedUser,
                                                    {new: true,       // return updated document
                                                     runValidators: true});
        response.status(200).json({message: "success", userUpdated: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}