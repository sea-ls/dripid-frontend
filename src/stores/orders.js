import { defineStore } from 'pinia'
import { ref } from 'vue'
import {useRouter} from "vue-router";

export const useOrdersStore = defineStore('order', () => {

    const orders = ref([
        {
            id: 1,
            description: 'Nike AIR MAX 95',
            track: '',
            status: 'В обработке',
            color: 'gray',
        },
        {
            id: 2,
            description: 'Adidas Color sweatshirt',
            track: '',
            status: 'В обработке',
            color: 'gray',
        },
    ])

    const headers = ref([
        {
            title: 'НОМЕР ЗАКАЗА',
            key: 'id',
        },
        {
            title: 'ССЫЛКА',
            key: 'link',
        },
        {
            title: 'ОПИСАНИЕ ТОВАРА',
            key: 'description',
        },
        {
            title: 'ТРЕК НОМЕР',
            key: 'track',
        },
        {
            title: 'ТИП',
            key: 'type'
        },
        {
            title: 'КОЛ-ВО',
            key: 'count'
        },
        {
            title: 'СТАТУС',
            key: 'status',
        },
    ])

    const statuses = [
        {
            name: 'В обработке',
            color: 'gray'
        },
        {
            name: 'Доставка по США',
            color: ''
        }
    ]

    function addOrder(type, cost, address, count, link) {
        orders.value.push({
            id: orders.value.length + 1,
            description: type,
            status: "В обработке",
            cost,
            address,
            count,
            link
        })
    }

    return { orders, headers, addOrder }
})
