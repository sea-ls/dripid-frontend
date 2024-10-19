import { defineStore } from 'pinia'
import { ref } from 'vue'

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

	const statuses = ref([
		{
			value: 'PROCESSING',
			name: 'В обработке',
			color: 'gray',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'PENDING_PAYMENT',
			name: 'Ожидает оплаты',
			color: '#304ffe',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'PAID',
			name: 'Оплачен',
			color: '#304ffe',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'WAREHOUSE_USA',
			name: 'На складе в США',
			color: 'red',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'SHIPPED_RUSSIA',
			name: 'Отправлен в Россию',
			color: 'red',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'REDEEMED',
			name: 'Отменён',
			color: 'red',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
		{
			value: 'DELIVERED',
			name: 'Доставлено',
			color: 'green',
			desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
		},
	])

	const warehouse = ref({})
	const withCard = ref(false)

	function getStatusByValue(value) {
		return statuses.find((status) => status.value === value)
	}

	function setWarehouse(house) {
		warehouse.value = house.value
	}

	function setIsWithCard(isCard) {
		withCard.value = isCard
	}

	return {
		headers,
		warehouse,
		setWarehouse,
		setIsWithCard,
		withCard,
		getStatusByValue,
		statuses,
	}
})
