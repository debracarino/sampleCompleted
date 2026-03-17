/**
 * AddBookForm.jsx
 * 
 * a component that allows users to add a new book element
 */
import { useState } from 'react';


const AddItem = () => {
    const [itemCat, setItemCat] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQty, setItemQty] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemFav, setItemFav] = useState(false);
    const [success, setSuccess] = useState("");

    const handleRadioChange = (event) => {
        setItemFav(event.target.value === 'true');
    }

    const submitForm = (event) => {
        event.preventDefault();

        const newItem = {
            category: itemCat,
            name: itemName,
            qty: itemQty,
            price: itemPrice,
            favorite: itemFav
        }

            fetch(`${import.meta.env.API_URL}/wishlist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        })
        .then(response => response.json())
        .then(data => setSuccess(data.message));

        setItemCat("");
        setItemName("");
        setItemQty("");
        setItemPrice("");
        setItemFav(false);
    }

    return (
        <div>
            <h3>Add an Item to your wishlist!</h3>
            <fieldset>
                <form onSubmit={submitForm}>
                    <select name="selCat" onChange={(event) => setItemCat(event.target.value)}>
                      <option value="Bedroom">Bedroom</option>
                      <option value="Kitchen">Kitchen</option>
                      <option value="Bathroom">Bathroom</option>
                      <option value="Living Room">Living Room</option>
                      <option value="Office">Office</option>
                      <option value="Tech">Tech</option>
                      <option value="Auto">Auto</option>
                    </select>
                    <br />
                    <br />
                    <label for="itemName">Item Name:</label>
                    <br />
                    <input type="text" id="itemName" name="itemName" size="50"
                        placeholder='Enter Item Name'
                        value={itemName}
                        onInput={(event) => setItemName(event.target.value)}
                    />
                    <br />  
                    <br />
                    <label for="itemQty">Quantity Wanted:</label>
                    <br />
                    <input type="text" id="itemQty" name="itemQty" size="50"
                        placeholder='Enter Quantity Wanted'
                        value={itemQty}
                        onInput={(event) => setItemQty(event.target.value)}
                    />
                    <br />  
                    <br />
                    <label for="itemPrice">Item Price:</label>
                    <br />
                    <input type="number" id="itemPrice" name="itemPrice" size="50"
                        placeholder='Enter Item Price'
                        value={itemPrice}
                        onInput={(event) => setItemPrice(event.target.value)}
                    />
                    <br />  
                    <br />
                    <p>Would you like to favorite this item?:</p>
                        <input type="radio" id="yesFav" name="itemFav" value="true" 
                            checked={itemFav === true}
                            onChange={handleRadioChange}
                        />
                            <label for="yesFav">Yes</label>
                        <br/>
                        <input type="radio" id="noFav" name="itemFav" value="false"
                            checked={itemFav === false}
                            onChange={handleRadioChange}
                        />
                            <label for="noFav">No</label>
                        <br/> 
                        <br />
                    <button type="submit">Submit</button> 
                </form>
            </fieldset>
        </div>
    )
}

export default AddItem;