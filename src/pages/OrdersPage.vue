<template>
	<div class="lk d-flex flex-column justify-space-between">
		<div class="w-100 overflow-visible" v-if="orders">
			<v-data-table-virtual :headers="headers" :items="orders.content" height="600px">
				<template v-slot:item.orderStatus="{ item }">
					<v-chip :color="ordersStore.getStatusByValue(item.orderStatus).color" v-if="role === 'user'">
						{{ ordersStore.getStatusByValue(item.orderStatus).name }}
					</v-chip>
					<v-select
						v-else
						variant="outlined"
						rounded="xl"
						width="200px"
						density="compact"
						color="primary"
						:items="statuses"
						item-title="name"
						:model-value="item.orderStatus"
						@update:model-value="changeStatus($event, item)"
					>
					</v-select>
				</template>
			</v-data-table-virtual>
		</div>
	</div>
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

<style scoped>
:deep(.v-input__details) {
	display: none !important;
}
</style>
