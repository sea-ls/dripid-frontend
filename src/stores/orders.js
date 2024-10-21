import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrdersStore = defineStore('order', () => {
	const warehouse = ref({})
	const withCard = ref(false)

	function setWarehouse(house) {
		warehouse.value = house.value
	}

	function setIsWithCard(isCard) {
		withCard.value = isCard
	}

	return {
		warehouse,
		setWarehouse,
		setIsWithCard,
		withCard,
	}
})
