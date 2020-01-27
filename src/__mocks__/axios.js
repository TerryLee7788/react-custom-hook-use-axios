const axios = options => new Promise((resolve, reject) => {

    if (options.testError) {

        reject(new Error('fail'))

    }
    else {

        resolve({ data: { message: 'react-custom-hook' } })

    }

});

export default axios;