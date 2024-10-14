import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ordersService } from '@/api/services/ordersService'
export const useOrdersStore = defineStore('order', () => {
	const orders = ref([
		{
			id: 1,
			description: 'Nike AIR MAX 95',
			track: 'E12MW459678',
			status: 'В обработке',
			color: 'gray',
		},
		{
			id: 2,
			description: 'Adidas Color sweatshirt',
			track: 'E12MW459679',
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
			key: 'type',
		},
		{
			title: 'КОЛ-ВО',
			key: 'count',
		},
		{
			title: 'СТАТУС',
			key: 'status',
		},
	])
	//
	const statuses = [
		{
			name: 'В обработке',
			color: 'gray',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			name: 'Доставка по США',
			color: '#304ffe',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			name: 'Доставка по России',
			color: '#304ffe',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			name: 'Отменен',
			color: 'red',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			name: 'Доставлено',
			color: 'green',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
	]

	const warehouse = ref({})
	const withCard = ref(false)

	function checkTrack(track) {
		const current = orders.value.find((o) => o.track.trim() === track.value.trim())
		return getStatusByName(current.status)
	}

	function getStatusByName(name) {
		return statuses.find((status) => status.name === name)
	}

	function getOrders() {
		const service = ordersService()
		service.getOrders().then((res) => {
			console.log(res)
		})
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
		orders,
		headers,
		addOrder,
		warehouse,
		setWarehouse,
		setIsWithCard,
		withCard,
		getStatusByName,
		statuses,
		changeStatus,
		checkTrack,
		getOrders,
	}
})
