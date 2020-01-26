## Features
- 1 dependency ([axios](https://github.com/axios/axios))
- Use [jsonplaceholder API](https://jsonplaceholder.typicode.com/todos) for Demo

## Usage
```js
import { useFetch } from '../customHooks';

const BasicUsage = () => {

    const [user, setUser] = useState(1);
    const [loading, response, error] = useFetch({
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
```

## Overview
### Hook
|Name|Description|
| -- | -- |
|loading|給畫面用的 loading 參數|
|response|API 的 response data|
|error|API 的錯誤訊息 (如果有需要的話)|

### Options
|Option|Description|
| -- | -- |
|`options`|完全參照 [axios API](https://github.com/axios/axios#axios-api) 參數|
|`dept`|有條件的 [觸發 effect](https://zh-hant.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)|
