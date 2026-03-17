/** -------------------
 * Wishlist.js
 * 
 * defines the Mongoose schema for item objects in the wishlist collection
 */

const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema(
    {
        category: {type: String,
                   enum: ["Bedroom", "Kitchen", "Bathroom", 
                          "Living Room", "Office", "Tech",
                           "Auto"],
                   required: true
        },

        name: {type: String,
                   required: true 
        },

        qty: {type: Number
        },

        price: {type: mongoose.Types.Decimal128
        },

        favorite: {type: Boolean
        }
    }
);

module.exports = mongoose.model("Wishlist", WishlistSchema);