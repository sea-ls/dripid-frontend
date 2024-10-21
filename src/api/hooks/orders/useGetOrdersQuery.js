import { useInfiniteQuery } from '@tanstack/vue-query'
import { fetchOrders } from '@/api/services/ordersService'

export const useGetOrdersQuery = () => {
	return useInfiniteQuery({
		queryKey: ['orders'],
		queryFn: fetchOrders,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.last === false) {
				return lastPage.number + 1
			}
		},
	})
}
