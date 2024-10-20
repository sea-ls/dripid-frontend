import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { deleteAddress } from '@/api/services/userService'

export const useDeleteAddressMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: deleteAddress,
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['addresses'],
			})
		},
	})
}
