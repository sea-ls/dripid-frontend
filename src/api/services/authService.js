import { useApi } from '@/api/useApi'

const token = localStorage.getItem('token')

export async function fetchUserData() {
	const response = await useApi.get({
		endpoint: 'api/delivery-service/person/authenticated',
		headers: { authorization: `Bearer ${token}` },
	})

	return response.data
}

export async function fetchAddresses() {
	const response = await useApi.get({
		endpoint: 'api/delivery-service/person/person/address',
		headers: { authorization: `Bearer ${token}` },
	})
	return response.data
}

export async function saveAddress(address) {
	await useApi.post({
		endpoint: 'api/delivery-service/person/address/save',
		headers: { authorization: `Bearer ${token}` },
		body: address,
	})
	return address
}
