import axios from 'axios'

const createRequestConfig = ({ endpoint, headers, params, body }) => {
	const API_URL = import.meta.env.VITE_APP_API_URL
	const url = `${API_URL}/${endpoint}`
	return {
		url,
		headers,
		params,
		data: body,
	}
}

export const useApi = {
	get: (config) =>
		axios({
			method: 'get',
			...createRequestConfig(config),
		}),

	post: (config) =>
		axios({
			method: 'post',
			...createRequestConfig(config),
		}),

	put: (config) =>
		axios({
			method: 'put',
			...createRequestConfig(config),
		}),

	delete: (config) =>
		axios({
			method: 'delete',
			...createRequestConfig(config),
		}),
}
