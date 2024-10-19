import { useApi } from '@/api/useApi'

const token = localStorage.getItem('token')

export async function fetchAllOrders() {
	const response = await useApi.get({
		endpoint: 'api/delivery-service/admin/orders/getAll/0?size=20',
		headers: { authorization: `Bearer ${token}` },
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
