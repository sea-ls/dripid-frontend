import axios from "axios";

export function useApi(init = {}) {
    const {endpoint, headers, params, body} = init;
    const API_URL = import.meta.env.VITE_APP_API_URL
    const url = `${API_URL}/${endpoint}`


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