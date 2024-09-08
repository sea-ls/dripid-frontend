<template>
	<v-card :width="mobile ? '100%' : '600px'" class="bg-grey-lighten-3 pa-10" rounded="xl" title="Расчет стоимости">
		<template #text>
			<v-select
				clearable
				variant="outlined"
				:items="['Китай', 'США', 'Германия']"
				label="Откуда"
				color="primary"
			/>
			<v-text-field placeholder="Страна, город" color="primary" variant="outlined" />
			<div class="d-flex justify-space-between">
				<div class="field">
					<v-text-field color="primary" variant="outlined" placeholder="Вес" v-model="range" type="number" />
					<v-btn-toggle v-model="buttonToggle">
						<v-btn icon="mdi-cellphone"></v-btn>
						<v-btn icon="mdi-tshirt-crew"></v-btn>
						<v-btn icon="mdi-shoe-sneaker"></v-btn>
					</v-btn-toggle>
				</div>
				<div class="field">
					<v-text-field color="primary" variant="outlined" placeholder="Стоимость" />
				</div>
			</div>
			<v-slider color="primary" :min="0" :max="20" :step="1" v-model="range" thumb-label />
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
		const range = ref(null)
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
}
</script>

<style scoped>
.field {
	width: 200px;
}
img {
	width: 100%;
}
</style>
