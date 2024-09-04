import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAddressStore = defineStore('address', () => {
    const addresses = ref([]);

    const addAddress = (country, city, address, postalCode) => {
        const fullAddress = `${country}, ${city}, ${address}, ${postalCode}`;
        addresses.value.push(fullAddress);
    };

    return { addresses, addAddress };
});