/**-----------------------------
 * wishlistController.js 
 * 
 * define all the functions needed to interact with the books collection
 * in our database 
 * ----------------------------- */ 
const Wishlist = require('../models/Wishlist');

//get the whole collection of items
exports.getAllItems = async (request, response) => {
    try {
        //const items = await Wishlist.find();
        const items=[{"_id":"69ac73f72dd20613c77b6215","category":"Tech","name":"Dell 28in Monitor","qty":2,"price":{"$numberDecimal":"70.99"},"favorite":false},{"_id":"69ac751b2dd20613c77b6218","category":"Kitchen","name":"10 pack Rainbow Forks","qty":1,"price":{"$numberDecimal":"45.00"},"favorite":true},{"_id":"69ac76232dd20613c77b6219","category":"Bathroom","name":"Bath Towels","qty":3,"price":{"$numberDecimal":"25.00"},"favorite":true},{"_id":"69b1e69e381aea7442d886dc","category":"Living Room","name":"Test","qty":2,"price":{"$numberDecimal":"3.90"},"favorite":true}];
        response.status(200).json(items);
    }
    catch (errMsg) {
        response.status(500).json({ error: "Server error - " + errMsg });
    }
}

//add an item
exports.addItem = async(request, response) => {
    const {category, name, qty, price, favorite} = request.body;
    try {
        const result = await Wishlist.create({category, name, qty, price, favorite});
        response.status(201).json({message: "success", itemAdded: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}

//delete item by id
exports.deleteItem = async(request, response) => {
    const theId = request.params.theItemId;
    try {
        const result = await Wishlist.findByIdAndDelete(theId);
        response.status(200).json({message: "success", itemDeleted: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}

//edit a item by id
exports.editItem = async(request, response) => {
    const theId = request.params.theItemId;
    const updatedItem = request.body;

    try {
        const result = await Wishlist.findByIdAndUpdate(theId, updatedItem,
                                                    {new: true,       // return updated document
                                                     runValidators: true});
        response.status(200).json({message: "success", ItemUpdated: result});
    }
    catch (errMsg) {
        response.status(500).json({message: "failure", error: errMsg});
    }
}