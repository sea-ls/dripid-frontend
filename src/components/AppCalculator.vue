<template>
	<v-card
		:width="mobile ? '100%' : width"
		class="bg-grey-lighten-4 pa-10 h-100 d-flex flex-column justify-center"
		elevation="0"
		rounded="xl"
		:title="title"
	>
		<template #text>
			<div class="d-flex justify-space-between ga-5">
				<div class="w-100">
					<div style="font-size: 16px; color: #5e5e5e">Страна, город</div>
					<v-text-field color="primary" variant="outlined" />
				</div>
				<div class="w-100">
					<div style="font-size: 16px; color: #5e5e5e">Склад</div>
					<v-select clearable variant="outlined" :items="['Китай', 'США', 'Германия']" color="primary" />
				</div>
			</div>
			<div class="d-flex justify-space-between ga-5 mb-5">
				<div class="w-100">
					<div class="mb-2" style="font-size: 16px; color: #5e5e5e">Вес</div>
					<div style="font-size: 16px">{{ range }} кг.</div>
				</div>
				<div class="w-100">
					<div class="mb-2" style="font-size: 16px; color: #5e5e5e">Стоимость</div>
					<div style="font-size: 16px">{{ range * 2 }}$</div>
				</div>
			</div>
			<v-slider color="primary" :min="0" :max="20" :step="0.5" v-model="range" thumb-label />
			<v-btn-toggle v-model="buttonToggle">
				<v-btn icon="mdi-cellphone"></v-btn>
				<v-btn icon="mdi-tshirt-crew"></v-btn>
				<v-btn icon="mdi-shoe-sneaker"></v-btn>
			</v-btn-toggle>
		</template>
	</v-card>
</template>

<script>
import { useDisplay } from 'vuetify'
import { ref, watch } from 'vue'

export default {
	name: 'CalculatorPage',
	setup() {
		const { mobile } = useDisplay()
		const range = ref(0)
		const buttonToggle = ref(null)

		watch(buttonToggle, (newVal, _) => {
			switch (newVal) {
				case 0:
					range.value = 2
					break
				case 1:
					range.value = 5
					break
				case 2:
					range.value = 10
					break
				default:
					range.value = 0
					break
			}
		})

		return {
			mobile,
			range,
			buttonToggle,
		}
	},
	props: {
		width: String,
		title: String,
	},
}
</script>

<style scoped>
img {
	width: 100%;
}
</style>
