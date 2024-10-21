<template>
	<v-container>
		<v-form ref="form" v-model="valid" lazy-validation>
			<div class="d-flex ga-10">
				<v-text-field
					v-model="price"
					:rules="[rules.required, rules.numeric]"
					label="Стоимость"
					required
					type="number"
					variant="outlined"
					rounded="xl"
					color="#304FFE"
					width="50%"
				/>
				<v-select
					v-model="currency"
					:items="currencies"
					item-value="value"
					item-title="name"
					:rules="[rules.required]"
					label="Валюта"
					required
					color="#304FFE"
					variant="outlined"
					rounded="xl"
					width="50%"
				/>
			</div>
			<v-text-field
				v-model="weight"
				:rules="[rules.required, rules.numeric]"
				label="Вес (в килограммах)"
				required
				type="number"
				variant="outlined"
				rounded="xl"
				color="#304FFE"
			/>
			<v-text-field
				v-model="productLink"
				:rules="[rules.required, rules.url]"
				label="Ссылка на товар"
				required
				variant="outlined"
				rounded="xl"
				color="#304FFE"
			/>
			<v-textarea v-model="comment" label="Комментарий к товару" color="#304FFE" />
			<v-btn color="blue darken-1" @click="submit">Добавить товар</v-btn>
		</v-form>

		<div v-if="showConvertedPrice">
			<p>Конвертированная цена: {{ convertedPrice }}₽</p>
			<p>Обратите внимание, что цена может измениться.</p>
		</div>

		<div class="d-flex ga-4 flex-wrap mt-3">
			<v-card v-for="(product, index) in products" :key="index" max-width="fit-content" class="pa-1">
				<v-card-text>
					<div>
						Ссылка: <a :href="product.url" target="_blank">{{ product.url }}</a>
					</div>
					<div v-if="product.description">Комментарий: {{ product.description }}</div>
					<div>Примерная стоимость: {{ product.price }}₽</div>
					<div>Вес: {{ product.weight }} кг</div>
					<div class="d-flex justify-end mb-n4 mt-n5">
						<v-btn variant="plain" icon="mdi-delete" @click="deleteProduct(product)" />
					</div>
				</v-card-text>
			</v-card>
		</div>
	</v-container>
	<v-alert
		v-if="isAlertVisible"
		text="Товар успешно добавлен!"
		type="success"
		location="bottom right"
		class="position-fixed mr-5"
		style="z-index: 100; margin-bottom: 90px"
	></v-alert>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'

const productStore = useProductStore()
const { addProduct, deleteProduct } = productStore
const { products } = storeToRefs(productStore)
const valid = ref(false)
const form = ref()
const isAlertVisible = ref(false)
const price = ref('')
const currency = ref('')
const productLink = ref('')
const comment = ref('')
const weight = ref('')
const currencies = [
	{
		value: 'USD',
		name: '$ Доллар США',
	},
	{
		value: 'EUR',
		name: '€ Евро',
	},
	{
		value: 'GBP',
		name: '£ Фунт стерлингов',
	},
] // список валют

const rules = {
	required: (v) => !!v || 'Это поле обязательно',
	numeric: (v) => !isNaN(v) || 'Должно быть числом',
	url: (v) => /^(ftp|http|https):\/\/[^ "]+$/.test(v) || 'Введите корректный URL',
}

const convertedPrice = computed(() => {
	const conversionRates = {
		USD: 75, // Примерный курс USD к RUB
		EUR: 80, // Примерный курс EUR к RUB
		GBP: 90, // Примерный курс GBP к RUB
	}
	return (price.value * (conversionRates[currency.value] || 1)).toFixed(2)
})

const showConvertedPrice = computed(() => {
	return price.value && currency.value
})

const submit = () => {
	if (valid.value) {
		const newProduct = {
			price: convertedPrice.value,
			url: productLink.value,
			description: comment.value,
			weight: weight.value,
		}
		addProduct(newProduct)
		showAlert()
		form.value.reset()
		form.value.resetValidation()
	}
}

const showAlert = () => {
	isAlertVisible.value = true
	setTimeout(() => {
		isAlertVisible.value = false
	}, 3000)
}
</script>

<style scoped>
.headline {
	font-weight: bold;
}
</style>
