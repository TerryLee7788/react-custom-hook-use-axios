import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../useFetch'

describe('useFetch - test', () => {

    test('test "useFetch" function exist', () => {

        expect(useFetch).not.toBe(undefined);
        expect(typeof useFetch).toBe('function');

    })

    test('test "useFetch" with arrray destructuring', async () => {

        const current = 1
        const { result, waitForNextUpdate } = renderHook(
            () => useFetch({
                url: `https://jsonplaceholder.typicode.com/todos/${current}`
            }, [current])
        );
        var [ loading, response, error ] = result.current

        expect(loading).toBe(true);

        await waitForNextUpdate();

        var [ loading, response, error ] = result.current

        expect(typeof response).toBe('object');
        expect(response.id).toEqual(current);
        expect(loading).toBe(false);

    })

    test('test "useFetch" error status', async () => {

        const { result, waitForNextUpdate } = renderHook(
            () => useFetch({
                url: 'https://example.com'
            })
        );
        var [ loading, response, error ] = result.current

        expect(loading).toBe(true);

        await waitForNextUpdate();

        var [ loading, response, error ] = result.current

        expect(typeof error).toBe('string')

    })

})
