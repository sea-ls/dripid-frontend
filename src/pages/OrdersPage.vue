<template>
	<v-expansion-panels multiple v-if="orders">
		<v-expansion-panel
			v-for="order in orders.content"
			:key="order.id"
			bg-color="grey-lighten-4
"
		>
			<v-expansion-panel-title>
				<div class="d-flex ga-3">
					<span><strong>Номер заказа:</strong> {{ order.trackNumberInternal }}</span>
					<span>
						<strong>Тип:</strong>
						{{ order.orderType }}
					</span>
					<span><strong>Статус:</strong> {{ order.orderStatus }}</span>
				</div>
			</v-expansion-panel-title>
			<v-expansion-panel-text>
				<v-card class="mb-5">
					<v-card-title>Товары</v-card-title>
					<v-card-text>
						<v-list>
							<v-list-item v-for="product in order.products" :key="product.id">
								<div><strong>Описание: </strong>{{ product.description }}</div>
								<div>
									<strong>Цена: </strong>{{ product.price.amount }} {{ product.price.currency }}
								</div>
								<div><strong>Вес: </strong>{{ product.weight }} kg</div>
								<div>
									<strong>Ссылка на товар: </strong><a :href="product.url">{{ product.url }}</a>
								</div>
							</v-list-item>
						</v-list>
					</v-card-text>
				</v-card>

				<v-card v-if="order.address">
					<v-card-title>Адрес</v-card-title>
					<v-card-text>
						<div><strong>Страна:</strong> {{ order.address.country }}</div>
						<div><strong>Индекс:</strong> {{ order.address.region }}</div>
						<div><strong>Город:</strong> {{ order.address.city }}</div>
						<div><strong>Адрес:</strong> {{ order.address.address }}</div>
					</v-card-text>
				</v-card>
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOrdersStore } from '@/stores/orders'
import { useGetOrdersQuery } from '@/api/hooks/orders/useGetOrdersQuery'
import { useGetAllOrdersQuery } from '@/api/hooks/admin/useGetAllOrdersQuery'
import { useUpdateOrderMutation } from '@/api/hooks/admin/useUpdateOrderMutation'

export default {
	name: 'OrdersPage',
	setup() {
		const route = useRoute()
		const role = route.params.role
		const ordersStore = useOrdersStore()
		const { headers, statuses } = storeToRefs(ordersStore)

		const { data: orders } = role === 'user' ? useGetOrdersQuery() : useGetAllOrdersQuery()
		const { mutate: updateOrder } = useUpdateOrderMutation()

		function changeStatus(event, item) {
			const request = { ...item, orderStatus: event }
			updateOrder(request)
		}

		return {
			ordersStore,
			orders,
			headers,
			statuses,
			role,
			changeStatus,
		}
	},
}
</script>

<style scoped></style>
