import { useApi } from '@/api/useApi'

const token = localStorage.getItem('token')

export async function fetchAllOrders({ pageParam = 0 }) {
	const response = await useApi.get({
		endpoint: `api/delivery-service/admin/orders/getAll/${pageParam}`,
		headers: { authorization: `Bearer ${token}` },
		params: {
			size: 20,
		},
	})
	return response.data
}

export async function updateOrder(order) {
	const response = await useApi.put({
		endpoint: 'api/delivery-service/admin/order/update',
		headers: { authorization: `Bearer ${token}` },
		body: order,
	})

	return order
}
