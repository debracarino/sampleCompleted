import { useState } from "react";
import  { Link } from 'react-router-dom';
//this component is going to make use of the global state from our context file
import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';

const Nav = () => {
    //state variables to track data entered into the txtUser and txtPass textboxes
    const [theUser, setTheUser] = useState("");
    const [thePass, setThePass] = useState("");
    //calling the "useContext" function allows this component to access the data in the
    //state variables/functions created in the context provider
    const { user, login, logout } = useUser();
    const { cart } = useCart();

    return(
    <nav>
        { user? (
                <>
                    <span id="greet">Welcome, {user.name}!</span>
                    <span id="cart">Cart: {cart.length}</span>
                    <button onClick={logout}>Log out</button>
                </>
            ):
            (
                <>
                    <label htmlFor="txtUser">UserName:</label>
                    <input type="text" id="txtUser" name="txtUser" value={theUser} 
                           onInput={(event) => {setTheUser(event.target.value)}} />
                    <label htmlFor="txtPass">Password:</label>
                    <input type="password" id="txtPass" name="txtPass" value={thePass}
                           onInput={(event) => {setThePass(event.target.value)}} />
                    <button onClick={() => login("dcarino", thePass)}>Log in</button>
                </>
            )
        }

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/viewusers">View Users</Link></li>
          <li><Link to="/adduser">Add a User</Link></li>
          <li><Link to="/deleteuser">Delete a User</Link></li>
        </ul>
    </nav>
    )
}

export default Nav;