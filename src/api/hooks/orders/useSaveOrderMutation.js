import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { saveOrderByUser } from '@/api/services/ordersService'

export const useSaveOrderMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: saveOrderByUser,
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['orders'],
			})
		},
	})
}
