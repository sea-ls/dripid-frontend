<template>
	<div>
		<v-container>
			<v-sheet class="d-flex flex-column ga-5">
				<h1>Заявка на выкуп-доставку товара</h1>
				<v-expansion-panels variant="accordion" multiple v-model="panels">
					<v-expansion-panel rounded="xl" value="info">
						<v-expansion-panel-title>
							<h4>Укажите информацию о товаре</h4>
						</v-expansion-panel-title>
						<v-expansion-panel-text>
						 <AddProductForm></AddProductForm>
						</v-expansion-panel-text>
					</v-expansion-panel>
					<v-expansion-panel rounded="xl" value="address">
						<v-expansion-panel-title>
							<h4>Укажите информацию о адресах доставки и складе</h4>
						</v-expansion-panel-title>
						<v-expansion-panel-text>
							<v-form>
								<v-select
									placeholder="Фактический адрес доставки"
									label="Фактический адрес доставки"
									color="#304FFE"
									variant="outlined"
									rounded="xl"
									:items="addresses"
								/>
							</v-form>
						</v-expansion-panel-text>
					</v-expansion-panel>
				</v-expansion-panels>
				<v-btn color="primary" @click="addApplication">Оставить заявку</v-btn>
			</v-sheet>
		</v-container>
	</div>
</template>

<script>
import { provide, ref } from 'vue'
import { useOrdersStore } from '@/stores/orders'
import { useRouter } from 'vue-router'
import AddProductForm from "@/components/AddProductForm.vue";
import {useProductStore} from "@/stores/product";
import {useAddressStore} from "@/stores/address";

export default {
	name: 'BuyApplicationPage',
  components: {AddProductForm},
	setup() {
		const type = ref('')
		const cost = ref(0)
		const address = ref('')
		const count = ref(1)
		const link = ref('')
		const warehouse = ref(null)

		const withCard = ref(false)
		const router = useRouter()

		const panels = ref(['type', 'info', 'address'])
    const addressStore = useAddressStore();
    const addresses = addressStore.addresses

		const warehouses = [
			{
				name: 'China',
				address:
					'980 Walsh Pines Suite 742,\n' +
					'\n' +
					'张丽娜 Tel:  13039789020;  13845658332\n' +
					'\n' +
					'164300 HEI LONG JIANG SHENG, HEI HE SHI, \n' +
					'\n' +
					'WANG SU JIE, SHUI AN HAO TING YI LOU KU FANG, \n' +
					'\n' +
					' Zhang  Lina, Tel:  13039789020;  13845658332',
			},
			{
				name: 'USA',
				address: '5000 COUNTY ROAD \n 309A IGNACIO CO \n 81137-9177 USA',
			},
			{
				name: 'Europe',
				address: '643 Watsica Mountain Suite 170 \n ',
			},
		]

		function addApplication() {
			const store = useOrdersStore();
      const productStore = useProductStore
			store.addOrder(
				type.value,
				cost.value,
				address.value,
				count.value,
				link.value,
				warehouse.value,
				withCard.value
			)
			store.setWarehouse(warehouse)
			store.setIsWithCard(withCard)
			router.push({ path: 'info' })
		}

		return {
			type,
			cost,
			address,
			count,
			link,
			withCard,
			panels,
			addApplication,
			warehouse,
			warehouses,
      addresses
		}
	},
}
</script>

<style scoped></style>
