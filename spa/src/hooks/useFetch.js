/** useFetch.js
 *  A custom hook used for data fetching
 * 
 *  Created by Debra & CS 234W students
 *  03/04/2026
 */

//custom hooks MUST use an existing React hook, in this case we'll use both useEffet and useState
import { useEffect, useState } from "react";


//create a function - the name must state with "use"
const useFetch = (endpoint) => {
    //create a state variable to store returned data.
    //also variables to track whether the process is still in process
    //and any returned error messages from the API
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);

                if(!response.ok) throw new Error("Network error");
                const result  = await response.json();
                const message = result.msg;
                const users = result.users;

                setMessage(message);
                setData(users);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [ endpoint]);

    return { data, message, loading, error };
}

export default useFetch;