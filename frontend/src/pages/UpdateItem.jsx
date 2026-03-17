import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const UpdateItem = () => {
    const [itemId, setItemId] = useState("");
    const [editItem, setEditItem] = useState(false);
    const [updateItemCat, setUpdateItemCat] = useState([]);
    const [updateItemName, setUpdateItemName] = useState("");
    const [updateItemQty, setUpdateItemQty] = useState("");
    const [updateItemPrice, setUpdateItemPrice] = useState("");
    const [updateItemFav, setUpdateItemFav] = useState(false);
    const [success, setSuccess] = useState("");
    const [updateSuccess, setUpdateSuccess] = useState("");
    const [updatedItemData, setUpdatedItemData] = useState({});

    const {data, message, loading, error} = useFetch(`${import.meta.env.API_URL}/wishlist`);

     const handleRadioChange = (event) => {
        setUpdateItemFav(event.target.value === 'true');
    }

    const handleEdit = (itemId) => {
        setEditItem(true);
        setItemId(itemId);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedItem = {
            category: updateItemCat,
            name: updateItemName,
            qty: updateItemQty,
            price: updateItemPrice,
            favorite: updateItemFav
        }
        
        fetch(`${import.meta.env.API_URL}/wishlist/` + itemId, {
            method: "PUT",            
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem)

    })
        .then(response => response.json())
        .then((data) => {
            setUpdateSuccess(data.message);
            setUpdatedItemData(data.itemUpdated)
            console.log(data.itemUpdated);
            console.log(data);
        })
    }

    return (
        <>
                {editItem? ( 
                   <> 
                   <fieldset>
                <form>
                    <select name="selCat" onChange={(event) => setUpdateItemCat(event.target.value)}>
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
                        value={updateItemName}
                        onInput={(event) => setUpdateItemName(event.target.value)}
                    />
                    <br />  
                    <br />
                    <label for="itemQty">Quantity Wanted:</label>
                    <br />
                    <input type="text" id="itemQty" name="itemQty" size="50"
                        placeholder='Enter Quantity Wanted'
                        value={updateItemQty}
                        onInput={(event) => setUpdateItemQty(event.target.value)}
                    />
                    <br />  
                    <br />
                    <label for="itemPrice">Item Price:</label>
                    <br />
                    <input type="number" id="itemPrice" name="itemPrice" size="50"
                        placeholder='Enter Item Price'
                        value={updateItemPrice}
                        onInput={(event) => setUpdateItemPrice(event.target.value)}
                    />
                    <br />  
                    <br />
                    <p>Would you like to favorite this item?:</p>
                        <input type="radio" id="yesFav" name="itemFav" value="true" 
                            checked={updateItemFav === true}
                            onChange={handleRadioChange}
                        />
                            <label for="yesFav">Yes</label>
                        <br/>
                        <input type="radio" id="noFav" name="itemFav" value="false"
                            checked={updateItemFav === false}
                            onChange={handleRadioChange}
                        />
                            <label for="noFav">No</label>
                        <br/> 
                        <br />
                    <button onClick={handleSubmit}>Save Changes</button>
                </form>
            </fieldset>
                    </>
                ) : ( 
               <> 
               
                <>
       <table>
                <thead>
                    <tr>
                    <th>Category</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Favorited?</th>
                        <th>Delete Item?</th>
                    </tr>
                </thead>
                {data.map((item) => (
                    <tbody>
                    <tr>
                        <td>{item.category}</td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>${item.price.$numberDecimal}</td>
                        <td>
                        {
                       
                            item.favorite ? (
                            <img src="/images/redheart.png" alt="red heart" width="50"/> 
                            ) : ("no")
                        }
                        </td>
                        <td>
                           <input onClick = {() => handleEdit(item._id)} 
                            type='button' id="btnSubmit" value="Edit Item" />
                        </td>
                    </tr>
                 </tbody>   
                ))}
            </table>
            
                </>
                
        </>
        )}
        </>
    )
}

export default UpdateItem