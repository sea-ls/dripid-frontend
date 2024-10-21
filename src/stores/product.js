import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '@/api/useApi'

export const useProductStore = defineStore('product', () => {
	const products = ref([])

	const addProduct = (product) => {
		products.value.push(product)
	}

	const deleteProduct = (product) => {
		products.value = products.value.filter((item) => JSON.stringify(item) !== JSON.stringify(product))
	}

	return { products, addProduct, deleteProduct }
})
