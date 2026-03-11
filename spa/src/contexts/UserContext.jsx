/** UserContext.jsx
 *  create a pseudo-global state variable to allow other components
 *  access to info about the current user
 */

//get access to the react pieces that make context possible
import { createContext, useContext, useState } from "react";

//define the name of the context
const UserContext = createContext();

//define the context provider - a special function that contains state variables
//                              that you want to be available everywhere in your application
//                              as well as any special functions that relate to this data
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //special functions that relate to this data
    //login - user has submitted some sort of login form
    const login = (userName, password) => {
        setUser({
            name: userName,
            pass: password,
            //lastLogin: Date(),
            isAuthenticated: true  //we could replace this with API endpoint fetch and store response data
        });
    };

    //logout - users have clicked on some sort of logout button/link/etc.
    const logout = () => {
        setUser(null);
    }

    //expose those pieces of the context that will be used elsewhere in our application
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);
