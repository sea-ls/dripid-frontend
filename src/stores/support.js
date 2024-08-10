import { defineStore } from "pinia"
import { ref } from "vue"

export const useSupportStore = defineStore('support', () => {
	const messages = ref([])
  
	return { messages }
  })