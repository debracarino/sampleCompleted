/**
 * useFetch.js
 * 3/15/2026
 * custom hook used for data fetching
 */

//import useEffect and useState from react
    import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);

                if(!response.ok) throw new Error("Network Error");
                const result = await response.json();
                console.log(result);
                setData(result);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [ endpoint ]);

    return {data, loading, error};
}

export default useFetch;