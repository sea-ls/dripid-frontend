import {defineStore} from "pinia";
import {ref} from "vue";

export const useUserStore = defineStore('user', () => {
    const name = ref('');
    const surname = ref('');

    return {name, surname}
})