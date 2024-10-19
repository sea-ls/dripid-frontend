import { useQuery } from '@tanstack/vue-query'
import { fetchAddresses } from '../../services/authService'

export const useGetAddressesQuery = () => {
	return useQuery({
		queryKey: ['addresses'],
		queryFn: fetchAddresses,
		staleTime: Infinity,
		refetchOnMount: false,
	})
}
