import {useApi} from "@/api/useApi";
import {useUserStore} from "@/stores/user";

export function authService() {
    const userStore= useUserStore()
    function getUserData() {
        const {get} = useApi({
            endpoint: '/person/authenticated',
            headers: {authorization: `Bearer ${userStore.token}`},
        })
        return get()
    }

    return {
        getUserData
    }
}