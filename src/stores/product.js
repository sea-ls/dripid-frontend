import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useApi} from "@/api/useApi";

export const useProductStore = defineStore('product', () => {
    const products = ref([]);

    const addProduct = (product) => {
        products.value.push(product);
        const api = useApi({
            params: product
        })
        api.post().then()
    };

    return { products, addProduct };
});