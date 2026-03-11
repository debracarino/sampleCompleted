/** -------------------
 * User.js
 * 
 * defines the Mongoose schema for user objects in the users collection
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userName: {type: String,
                   required: true,
                   lowercase: true
        },
        joinDate: {type: Date,
                   default: Date.now 
        },
        email:    {type: String,
                   required: true,
                   unique: true
        }
    },
    {
        timestamps: true    //auto adds a createdAt and updatedAt fields
    }
);

module.exports = mongoose.model("User", userSchema);