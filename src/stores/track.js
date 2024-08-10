import { defineStore } from "pinia"
import { ref } from "vue"

export const useTrackStore = defineStore('track', () => {
	const trackNumber = ref('')
  
	return { trackNumber }
  })