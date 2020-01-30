<p align="left">
    <a href="https://travis-ci.org/TerryLee7788/react-custom-hook-use-axios">
      <img src="https://travis-ci.org/TerryLee7788/react-custom-hook-use-axios.svg?branch=master" />
    </a>
    <a href="https://www.npmjs.com/package/react-custom-hook-use-axios">
      <img src="https://img.shields.io/npm/dt/react-custom-hook-use-axios.svg" />
    </a>
    <a href="https://lgtm.com/projects/g/TerryLee7788/react-custom-hook-use-axios/context:javascript">
        <img alt="undefined" src="https://img.shields.io/lgtm/grade/javascript/g/TerryLee7788/react-custom-hook-use-axios.svg?logo=lgtm&logoWidth=18"/>
    </a>
    <!-- <a href="https://packagequality.com/#?package=react-custom-hook-use-axios">
        <img src="https://npm.packagequality.com/shield/react-custom-hook-use-axios.svg"/>
    </a> -->
    <a href='https://coveralls.io/github/TerryLee7788/react-custom-hook-use-axios?branch=master'><img src='https://coveralls.io/repos/github/TerryLee7788/react-custom-hook-use-axios/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>

## Installation
```
npm i react-custom-hook-use-axios
```

## Features
- 1 dependency ([axios](https://github.com/axios/axios))
- Use [jsonplaceholder API](https://jsonplaceholder.typicode.com/todos) for Demo

## Usage
```js
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
```

## Overview
### Hook
|Name|Description|
| -- | -- |
|loading|給畫面用的 loading 參數|
|response|API 的 response data|
|fetchData|手動調用 "fetchData" fn (如果有需要的話)|
|error|API 的錯誤訊息 (如果有需要的話)|

### Options
|Option|Description|
| -- | -- |
|`options`|完全參照 [axios API](https://github.com/axios/axios#axios-api) 參數|
|`deps`|有條件的 [觸發 effect](https://zh-hant.reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)|
