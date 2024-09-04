import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const products = ref([]);

    const addProduct = (product) => {
        products.value.push(product);
    };

    return { products, addProduct };
});