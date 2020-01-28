import React, { useState } from 'react';
import { useFetch } from 'react-custom-hook-use-axios';

const BasicUsage = () => {

    const [user, setUser] = useState(1);
    const [loading, response, , error] = useFetch({
        url: `https://jsonplaceholder.typicode.com/todos/${user}`
    }, [user]);

    return (
        <div
            style={{
                marginTop: '10px',
                padding: 12
            }}
        >
            <div>
                current user: {user}
            </div>
            <div>
                <button
                    onClick={() => {
                        if (loading) return
                        setUser(user + 1)
                    }}
                >
                    {
                        loading
                            ? 'loading...'
                            : 'Next user'
                    }
                </button>
            </div>
            {
                error
                    ? error
                    : null
            }
            {
                loading
                    ? ('loading...')
                    : (
                        response
                            ? response.title
                            : null
                    )
            }
        </div>
    )

}

export default BasicUsage;
