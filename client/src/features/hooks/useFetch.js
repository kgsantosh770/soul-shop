import { useState, useEffect } from 'react';
import { getToken } from '../utils/getters';

const useFetch = (options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = process.env.REACT_APP_API_BASE_URL + options?.route;
    const fetchOptions = {
        method: options?.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null);
            let response = null;
            try {
                response = await fetch(url, fetchOptions);
                const responseData = await response.json();
                if (!response.ok) setError(responseData.message);
                else setData(responseData.data)
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        }

        if (options?.postData)
            fetchOptions.body = options.postData;
        if(options?.proceed) fetchData();
    }, [url])

    return { data, loading, error }
}
export default useFetch;