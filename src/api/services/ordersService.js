import { useApi } from '@/api/useApi'

const token = localStorage.getItem('token')

export async function saveOrderByUser(order) {
	const response = await useApi.post({
		endpoint: 'api/delivery-service/person/order/save',
		headers: { authorization: `Bearer ${token}` },
		body: order,
	})

	return response.data
}

export async function fetchOrders() {
	const response = await useApi.get({
		endpoint: 'api/delivery-service/person/orders/0',
		headers: { authorization: `Bearer ${token}` },
		params: {
			size: 50,
		},
	})
	return response.data
}
