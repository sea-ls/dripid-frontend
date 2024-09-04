// src/stores/orderStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOrderStore = defineStore('order', () => {
    const orders = ref([]);

    const addOrder = (order) => {
        orders.value.push(order);
    };

    const updateOrderStatus = (index, status) => {
        if (orders.value[index]) {
            orders.value[index].status = status;
        }
    };

    return { orders, addOrder, updateOrderStatus };
});