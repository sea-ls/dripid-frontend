import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { saveAddress } from '@/api/services/authService'

export const useSaveAddressMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: saveAddress,
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['addresses'],
			})
		},
	})
}
