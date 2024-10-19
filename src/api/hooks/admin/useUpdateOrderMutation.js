import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { updateOrder } from '@/api/services/adminService'

export const useUpdateOrderMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: updateOrder,
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['orders'],
			})
		},
	})
}
