<template>
	<v-card>
		<v-card-title>
			<h2>Ваша заявка успешно создана!</h2>
		</v-card-title>
		<v-card-item v-if="withCard">
			<h4 class="text-primary">Тип заявки:</h4>
			<h4>{{ withCard ? 'Доставка' : 'Выкуп' }}</h4>
			<h4 class="text-primary">Страна:</h4>
			<h4>{{ warehouse.name }}</h4>
			<h4 class="text-primary">Адрес склада:</h4>
			<h4>{{ warehouse.address }}</h4>
			<p class="text-body-1">
				Укажите этот адрес при заказе товара. После получения его на нашем складе, статсус заказа изменится.
				Статусы заказа отображаются в таблице заказов в личном кабинете
			</p>
		</v-card-item>
		<v-card-actions>
			<v-btn color="primary" @click="$router.push('/lk/menu')">Подтвердить</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { useOrdersStore } from '@/stores/orders'

export default {
	name: 'InfoPage',
	setup() {
		const store = useOrdersStore()
		const warehouse = store.warehouse

		const withCard = store.withCard

		return {
			withCard,
			warehouse,
		}
	},
}
</script>

<style scoped></style>
