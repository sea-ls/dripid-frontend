<template>
	<div v-if="isPending">Загрузка...</div>
	<div v-else-if="isError">Произошла ошибка: {{ error.message }}</div>
	<v-sheet class="d-flex flex-column ga-5">
		<h1>Заявка на выкуп-доставку товара</h1>
		<v-expansion-panels variant="accordion" multiple v-model="panels">
			<v-expansion-panel rounded="xl" value="info">
				<v-expansion-panel-title>
					<h4>Укажите информацию о товаре</h4>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<AddProductForm />
				</v-expansion-panel-text>
			</v-expansion-panel>
			<v-expansion-panel rounded="xl" value="address">
				<v-expansion-panel-title>
					<h4>Укажите информацию о адресах доставки и складе</h4>
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					<v-select
						placeholder="Фактический адрес доставки"
						label="Фактический адрес доставки"
						color="#304FFE"
						variant="outlined"
						rounded="xl"
						:items="addresses"
						item-value="id"
						item-title="address"
						v-model="currentAddressId"
						v-if="addresses"
					/>
					<template v-else>
						<div>
							<p>У вас пока нет адресов</p>
							<RouterLink to="/lk/personal">Добавить новый в личном кабинете</RouterLink>
						</div>
					</template>
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
		<v-btn color="primary" @click="addApplication">Оставить заявку</v-btn>
	</v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AddProductForm from '@/components/AddProductForm.vue'
import { useGetAddressesQuery } from '@/api/hooks/addresses/useGetAddressesQuery'
import { useSaveOrderMutation } from '@/api/hooks/orders/useSaveOrderMutation'
import { useProductStore } from '@/stores/product'

const type = ref('DELIVERY')
const address = ref('')
const link = ref('')
const warehouse = ref(null)
const withCard = ref(false)
const router = useRouter()
const panels = ref(['type', 'info', 'address'])
const currentAddressId = ref('')
const { products } = useProductStore()
const { data: addresses, isPending, isError, error } = useGetAddressesQuery()
const { mutate: saveOrder } = useSaveOrderMutation()

const addApplication = () => {
	saveOrder({
		orderType: type.value,
		products,
		warehouseId: 1,
		addressId: currentAddressId.value,
	})
	router.push({ name: 'info' })
}
</script>

<style scoped></style>
