import {useApi} from "@/api/useApi";
import {useUserStore} from "@/stores/user";

export function authService() {
    const userStore= useUserStore()

    function fetchUserData() {
        const {get} = useApi({
            endpoint: 'api/delivery-service/person/authenticated',
            headers: {authorization: `Bearer ${userStore.token}`},
        })
        return get()
    }

    function fetchAddresses() {
        const {get} = useApi({
            endpoint: 'api/delivery-service/person/person/address',
            headers: {authorization: `Bearer ${userStore.token}`},
        })
        return get()
    }

    return {
        fetchUserData,
        fetchAddresses
    }
}