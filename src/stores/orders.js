import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchOrders } from '@/api/services/ordersService'
export const useOrdersStore = defineStore('order', () => {
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
			key: 'trackNumberExternal',
		},
		{
			title: 'ТИП',
			key: 'orderType',
		},
		{
			title: 'КОЛ-ВО',
			key: 'count',
		},
		{
			title: 'СТАТУС',
			key: 'orderStatus',
		},
	])

	const statuses = [
		{
			value: 'PROCESSING',
			name: 'В обработке',
			color: 'gray',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'asdf',
			name: 'Доставка по США',
			color: '#304ffe',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'dfg',
			name: 'Доставка по России',
			color: '#304ffe',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'fgh',
			name: 'Отменен',
			color: 'red',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'DELIVERED',
			name: 'Доставлено',
			color: 'green',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
	]

	const warehouse = ref({})
	const withCard = ref(false)

	function checkTrack(track) {
		// const current = orders.value.find((o) => o.track.trim() === track.value.trim())
		// return getStatusByName(current.status)
		console.log('aboba')
	}

	function getStatusByValue(value) {
		return statuses.find((status) => status.value === value)
	}

	async function getOrders() {
		const data = await fetchOrders()
		if (data) {
			orders.value = data.content
			console.log(data)
		}
	}

	function addOrder(type, cost, address, count, link, warehouse, withCard) {
		orders.value.push({
			id: orders.value.length + 1,
			description: type,
			status: 'В обработке',
			cost,
			address,
			count,
			link,
			warehouse,
			withCard,
			track: 'E12MW459678' + Math.round(Math.random() * 100).toString(),
		})
	}

	function changeStatus(status, item) {
		const current = orders.value.find((o) => o.id === item.id)
		current.status = status
	}

	function setWarehouse(house) {
		warehouse.value = house.value
	}

	function setIsWithCard(isCard) {
		withCard.value = isCard
	}

	return {
		headers,
		addOrder,
		warehouse,
		setWarehouse,
		setIsWithCard,
		withCard,
		getStatusByValue,
		statuses,
		changeStatus,
		checkTrack,
		getOrders,
	}
})
