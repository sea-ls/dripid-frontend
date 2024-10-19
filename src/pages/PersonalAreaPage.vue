<template>
	<v-container>
		<v-layout style="min-height: 89vh">
			<v-navigation-drawer class="border-0" :width="330" style="height: 100%; max-height: 89vh">
				<PersonalMenu />
			</v-navigation-drawer>

			<v-main class="ml-5" style="min-height: 100%">
				<router-view />
			</v-main>
		</v-layout>
	</v-container>
</template>

<script>
import { inject, ref } from 'vue'
import router from '@/router/router'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import PersonalMenu from '@/components/PersonalMenu.vue'

export default {
	name: 'PersonalAreaPage',
	methods: {
		router() {
			return router
		},
	},
	setup() {
		const router = useRouter()
		const { mobile } = useDisplay()
		const orders = [
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
			{
				id: 3,
				description: 'Louis bag',
				track: 'E12MW459678',
				status: 'В Пути',
				color: '#304FFE',
			},
			{
				id: 4,
				description: 'AIRMAX 95',
				track: 'E12MW459462',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 5,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 6,
				description: 'AIRMAX 95',
				track: 'E12MW45923',
				status: 'Отменен',
				color: 'red',
			},
			{
				id: 7,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 8,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 9,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 10,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 11,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 12,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 13,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 15,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
			{
				id: 16,
				description: 'AIRMAX 95',
				track: 'E12MW45921231',
				status: 'Доставлен',
				color: 'green',
			},
		]

		let drawer = inject('drawer')
		if (!mobile.value) drawer.value = true

		const headers = [
			{
				title: 'НОМЕР ЗАКАЗА',
				key: 'id',
			},
			{
				title: 'ОПИСАНИЕ',
				key: 'description',
			},
			{
				title: 'ТРЕК НОМЕР',
				key: 'track',
			},
			{
				title: 'СТАТУС',
				key: 'status',
			},
		]

		const accountInfo = ref({})

		// fetch('http://212.233.73.223:8080/api/delivery-service/person/authenticated', {
		//   method: 'GET',
		//   headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
		// }).then(res => res.json()).then((data) => accountInfo.value = data.accountInfo)

		return {
			orders,
			headers,
			accountInfo,
			drawer,
		}
	},
}
</script>

<style scoped lang="scss">
.lk__avatar {
	width: 200px;
	height: 200px;
	background-color: gray;
	border-radius: 20px;
}

.lk__about_row-title {
	color: #304ffe;
}

.lk__about_row-text {
	width: 100%;
	background-color: gray;
	border-radius: 10px;
}
</style>
