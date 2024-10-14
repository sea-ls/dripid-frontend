import {useUserStore} from "@/stores/user";
import {useApi} from "@/api/useApi";

export function ordersService() {
    const userStore= useUserStore();

    function saveOrderByUser(order) {
        const api = useApi ({
            endpoint: 'api/delivery-service/person/order/save',
            headers: {authorization: `Bearer ${userStore.token}`},
            body: order,
        })

        return api.post()
    }

    function getOrders() {
        const api = useApi ({
            endpoint: 'api/delivery-service/person/orders/1',
            headers: {authorization: `Bearer ${userStore.token}`},
            params:{
                page: 1,
                count: 20,
                id: userStore.userId
            }
        })

        return api.get()
    }

    return {
        saveOrderByUser,
        getOrders
    }
}