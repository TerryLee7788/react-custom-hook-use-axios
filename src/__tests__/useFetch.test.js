import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../useFetch'

describe('useFetch - test', () => {

    test('test "useFetch" function exist', () => {

        expect(useFetch).not.toBe(undefined);
        expect(typeof useFetch).toBe('function');

    });

    test('test "useFetch" with arrray destructuring', async () => {

        const { result, waitForNextUpdate } = renderHook(
            () => useFetch({
                url: 'https://example.com',
                testError: false
            }, [])
        );
        var [ loading, response ] = result.current;

        expect(loading).toBe(true);

        await waitForNextUpdate();

        expect(loading).toBe(true);

        var [ loading, response ] = result.current;

        expect(typeof response).toBe('object');
        expect(response.message).toEqual('react-custom-hook');
        expect(loading).toBe(false);

    });

    test('test call "fetchData" twice at the same time', async () => {

        const { result, waitForNextUpdate } = renderHook(
            () => useFetch({
                url: 'https://example.com',
                testError: false
            }, [])
        );

        var [ loading, response, fetchData ] = result.current;

        expect(loading).toBe(true);

        fetchData();

        expect(loading).toBe(true);

        await waitForNextUpdate();

        var [ loading, response ] = result.current;

        expect(loading).toBe(false);

    });

    test('test "useFetch" error status', async () => {

        const { result, waitForNextUpdate } = renderHook(
            () => useFetch({
                url: 'https://example.com',
                testError: true
            })
        );
        var [ loading, , error ] = result.current;

        expect(loading).toBe(true);

        await waitForNextUpdate();

        var [ loading, , , error ] = result.current;

        expect(loading).toBe(false);
        expect(typeof error).toBe('string');

    });

});
