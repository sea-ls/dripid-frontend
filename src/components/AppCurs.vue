<template>
	<div class="currency-rates">
		<span>Курс валют: </span>
		<span class="currency-rate">1 $ = {{ usdToRub }} ₽</span>
		<span class="currency-rate"> |</span>
		<span class="currency-rate">1 € = {{ eurToRub }} ₽</span>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	setup() {
		// Жестко закодированные курсы валют
		const usdToRub = ref(75) // Примерный курс USD к RUB
		const eurToRub = ref(80) // Примерный курс EUR к RUB

		return {
			usdToRub,
			eurToRub,
		}
	},
}
</script>

<style scoped>
.currency-rates {
	display: flex;
	align-items: center; /* Центрирование по вертикали */
	font-size: 14px; /* Размер шрифта */
	color: #fff; /* Цвет текста */
}

.currency-rate {
	margin: 0 2px; /* Отступы между курсами */
	font-weight: bold; /* Жирный шрифт для курсов */
}
</style>
