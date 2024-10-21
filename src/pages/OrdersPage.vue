<template>
	<v-expansion-panels multiple v-if="data">
		<template v-for="(page, index) in data.pages" :key="index">
			<v-expansion-panel v-for="order in page.content" bg-color="grey-lighten-5">
				<v-expansion-panel-title>
					<div class="d-flex ga-3 align-center">
						<div v-if="order.orderType === 'DELIVERY'">
							<strong>Номер заказа:</strong> {{ order.trackNumberInternal }}
						</div>
						<div v-else><strong>Номер заказа:</strong> {{ order.trackNumberExternal }}</div>
						<!-- <div class="d-flex align-center ga-1">
							<strong>Тип:</strong><StatusChip :status-value="order.orderType" />
						</div> -->
						<div v-if="!isAdmin" class="d-flex align-center ga-1">
							<strong>Статус:</strong><StatusChip :status-value="order.orderStatus" />
						</div>
						<v-select
							v-else
							variant="outlined"
							rounded="xl"
							width="200px"
							density="compact"
							color="primary"
							:items="statuses"
							item-title="name"
							:model-value="order.orderStatus"
							@update:model-value="changeStatus($event, order)"
							@click.stop
						/>
					</div>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<div style="font-size: 24px">Товары</div>
					<div class="d-flex ga-4 flex-wrap mb-5">
						<v-card v-for="product in order.products" :key="product.id" width="fit-content">
							<v-card-text>
								<div v-if="product.description">
									<strong>Описание: </strong>{{ product.description }}
								</div>
								<div><strong>Цена: </strong>{{ product.price.amount }}₽</div>
								<div><strong>Вес: </strong>{{ product.weight }} кг</div>
								<div>
									<strong>Ссылка на товар: </strong><a :href="product.url">{{ product.url }}</a>
								</div>
							</v-card-text>
						</v-card>
					</div>

					<div>
						Адрес доставки:
						{{
							`${order.address.country}, г. ${order.address.city}, ${order.address.address}, Индекс: ${order.address.region}`
						}}
					</div>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</template>
	</v-expansion-panels>
	<v-skeleton-loader type="list-item" v-if="isFetchingNextPage" />
</template>

<script setup>
import { useGetOrdersQuery } from '@/api/hooks/orders/useGetOrdersQuery'
import { useGetAllOrdersQuery } from '@/api/hooks/admin/useGetAllOrdersQuery'
import { useUpdateOrderMutation } from '@/api/hooks/admin/useUpdateOrderMutation'
import StatusChip from '@/components/StatusChip.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user'

const statuses = [
	{
		value: 'PROCESSING',
		name: 'В обработке',
	},
	{
		value: 'PENDING_PAYMENT',
		name: 'Ожидает оплаты',
	},
	{
		value: 'PAID',
		name: 'Оплачен',
	},
	{
		value: 'WAREHOUSE_USA',
		name: 'На складе в США',
	},
	{
		value: 'SHIPPED_RUSSIA',
		name: 'Отправлен в Россию',
	},
	{
		value: 'DELIVERED',
		name: 'Доставлено',
	},
	{
		value: 'REDEEMED',
		name: 'Отменён',
	},
]

const { isAdmin } = useUserStore()

const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = isAdmin ? useGetAllOrdersQuery() : useGetOrdersQuery()
const { mutate: updateOrder } = useUpdateOrderMutation()

const handleScroll = () => {
	const scrollable = document.documentElement
	const bottomReached = scrollable.scrollTop + window.innerHeight >= scrollable.scrollHeight

	if (bottomReached && hasNextPage.value && !isFetchingNextPage.value) {
		fetchNextPage()
	}
}

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
})

window.addEventListener('scroll', handleScroll)

const changeStatus = (event, item) => {
	const request = { ...item, orderStatus: event }
	updateOrder(request)
}
</script>
