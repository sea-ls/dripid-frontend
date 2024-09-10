import {useUserStore} from "@/stores/user";
import {useApi} from "@/api/useApi";

export function ordersService() {
    const userStore= useUserStore()

    function saveOrderByUser(order) {
        const api = useApi ({
            endpoint: 'api/delivery-service/person/order/save',
            headers: {authorization: `Bearer ${userStore.token}`},
            body: order,
        })

        return api.post()
    }

    return {
        saveOrderByUser
    }
}