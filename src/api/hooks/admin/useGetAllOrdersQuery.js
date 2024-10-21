import { fetchAllOrders } from '@/api/services/adminService'
import { useInfiniteQuery } from '@tanstack/vue-query'

export const useGetAllOrdersQuery = () => {
	return useInfiniteQuery({
		queryKey: ['orders'],
		queryFn: fetchAllOrders,
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.last === false) {
				return lastPage.number + 1
			}
		},
	})
}
