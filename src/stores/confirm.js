import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfirmStore = defineStore('confirm', () => {
	const isConfirmDialogOpen = ref(false)
	const isConfirmed = ref(false)

	const confirm = () => {
		isConfirmed.value = true
	}

	const closeConfirmDialog = () => {
		isConfirmDialogOpen.value = false
		isConfirmed.value = false
	}

	const openConfirmDialog = () => {
		isConfirmDialogOpen.value = true
	}

	return {
		isConfirmDialogOpen,
		isConfirmed,
		confirm,
		closeConfirmDialog,
		openConfirmDialog,
	}
})
