import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useApi} from "@/api/useApi";

export const useProductStore = defineStore('product', () => {
    const products = ref([]);

    const addProduct = (product) => {
        products.value.push(product);
    };

    return { products, addProduct };
});