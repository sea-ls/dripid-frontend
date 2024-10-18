import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
	const accountInfo = ref({})
	const addresses = ref([])
	const userId = ref(null)
	const userRole = ref('USER')
	const userBalance = ref(0)

	const isAdmin = computed(() => userRole.value === 'ADMIN')
	const isAuth = computed(() => userId.value !== null)
	const fullName = computed(() =>
		accountInfo.value.firstName ? accountInfo.value.firstName + ' ' + accountInfo.value.lastName : 'Загрузка...'
	)

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
		userBalance,
		userRole,
		isAdmin,
		fullName,
		setAccountInfo,
		setAddresses,
		serUserId,
		setUserRole,
		isAuth,
	}
})
