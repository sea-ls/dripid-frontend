import { fetchAllOrders } from '@/api/services/adminService'
import { useQuery } from '@tanstack/vue-query'

export const useGetAllOrdersQuery = () => {
	return useQuery({
		queryKey: ['orders'],
		queryFn: fetchAllOrders,
	})
}
