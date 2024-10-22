import { useApi } from '@/api/useApi'
import { keycloak } from '@/use/auth'

export async function saveOrderByUser(order) {
	const response = await useApi.post({
		endpoint: 'api/delivery-service/person/order/save',
		headers: { authorization: `Bearer ${keycloak.token}` },
		body: order,
	})

	return response.data
}

export async function fetchOrders({ pageParam = 0 }) {
	const response = await useApi.get({
		endpoint: `api/delivery-service/person/orders/${pageParam}`,
		headers: { authorization: `Bearer ${keycloak.token}` },
		params: {
			size: 30,
		},
	})
	return response.data
}
