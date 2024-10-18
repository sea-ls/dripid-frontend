import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { saveAddress } from '@/api/services/authService'

export const useSaveAddressMutation = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: saveAddress,
		onSuccess: (newAddress) => {
			client.setQueriesData(['addresses'], (oldAddresses) => {
				return [...oldAddresses, newAddress]
			})

			client.invalidateQueries({
				queryKey: ['addresses'],
				refetchType: 'none',
			})
		},
	})
}
