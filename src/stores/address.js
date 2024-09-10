import { defineStore } from 'pinia';
import { ref } from 'vue';
import {authService} from "@/api/sevices/authService";

export const useAddressStore = defineStore('address', () => {
    const addresses = ref([]);

    const addAddress = (country, city, address, postalCode) => {
        const fullAddress = `${country}, ${city}, ${address}, ${postalCode}`;
        addresses.value.push(fullAddress);
    };

    async function getAddresses() {
        const service = authService();
        await service.fetchAddresses()
            .then(({data}) => {
                addresses.value = data
            })
    }

    return { addresses, addAddress, getAddresses };
});