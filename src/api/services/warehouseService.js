import {useUserStore} from "@/stores/user";
import {useApi} from "@/api/useApi";

export function warehouseService() {
    const userStore= useUserStore()

    function fetchWarehouses() {
        const api = useApi ({
            endpoint: 'api/delivery-service/warehouse',
            headers: {authorization: `Bearer ${userStore.token}`},
        })

        return api.get()
    }

    return {
        fetchWarehouses
    }
}