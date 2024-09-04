import axios from "axios";

export function useApi(init = {}) {
    const {url, headers, params, body} = init;

    function get() {
        return axios({
            method: 'GET',
            url,
            params,
            headers,
            data: body
        })
    }

    function post() {
        return axios({
            method: 'POST',
            url,
            params,
            headers,
            data: body
        })
    }

    return {
        get,
        post
    }
}