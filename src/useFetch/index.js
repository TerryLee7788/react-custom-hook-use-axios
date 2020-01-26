import { useEffect, useState } from 'react';
import axios from 'axios';

const fetchFn = (options) => axios({
    method: 'get',
    ...options
});

const useFetch = (options, dept = []) => {

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        (async () => {

            if (loading) return

            setLoading(true);

            try {

                const res = await fetchFn(options);
                const data = res.data;
                setResponse(data);

            }
            catch (error) {

                setError(error.message);

            }
            finally {

                setLoading(false);

            }

        })();

    }, dept);

    return [loading, response, error];

};

export { useFetch };
