import { useQuery } from '@tanstack/vue-query'
import { fetchOrders } from '@/api/services/ordersService'

export const useGetOrdersQuery = () => {
	return useQuery({
		queryKey: ['orders'],
		queryFn: fetchOrders,
	})
}
