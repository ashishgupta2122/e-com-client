import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();

    useEffect(() => {
        // Define an async function inside useEffect and call it immediately
        async function fetchData() {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res);
            } catch (error) {
                // Handle errors here if needed
            }
        }

        fetchData(); // Call the async function

        // Since the useEffect hook doesn't need any cleanup logic,
        // you don't need to return anything here.
    }, [endpoint]);

    return { data };
};

export default useFetch;
