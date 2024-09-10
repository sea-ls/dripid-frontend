import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const accountInfo = ref({});
    const token = ref('');
    const addresses = ref([]);
    const userId = ref(null);
    const userRole = ref('USER');
    const userBalance = ref(0);

    const isAdmin = computed(() => userRole.value === 'ADMIN')
    const isAuth = computed(() => userId.value !== null)

    function setToken(accessToken) {
        token.value = accessToken
        console.log(token.value)
    }

    function setAccountInfo(info) {
        accountInfo.value = info
    }

    function setAddresses(currentAddresses) {
        addresses.value = currentAddresses
    }

    function serUserId(id) {
        userId.value = id
    }

    function setUserRole(role) {
        userRole.value = role
    }

    function setUserBalance(balance) {
        userBalance.value = balance
    }

    return {
        accountInfo,
        userId,
        addresses,
        token,
        userBalance,
        userRole,
        isAdmin,
        setToken,
        setAccountInfo,
        setAddresses,
        serUserId,
        setUserRole,
        isAuth,
        setUserBalance
    }
})