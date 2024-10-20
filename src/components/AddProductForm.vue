<template>
	<v-container>
		<v-form ref="form" v-model="valid" lazy-validation>
			<v-text-field
				v-model="price"
				:rules="[rules.required, rules.numeric]"
				label="Стоимость"
				required
				type="number"
				variant="outlined"
				rounded="xl"
				color="#304FFE"
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
			/>
			<v-text-field
				v-model="quantity"
				:rules="[rules.required, rules.numeric]"
				label="Количество товара"
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
			<p>
				Конвертированная цена: {{ convertedPrice }} ₽ <br />
				Обратите внимание, что цена может измениться.
			</p>
		</div>

		<v-row>
			<v-col v-for="(product, index) in productStore.products" :key="index" cols="12" sm="6" md="4">
				<v-card>
					<v-card-title>
						<span class="headline">{{ product.productType }}</span>
					</v-card-title>
					<v-card-subtitle> Валюта: {{ product.currency }} </v-card-subtitle>
					<v-card-subtitle> Количество: {{ product.quantity }} </v-card-subtitle>
					<v-card-subtitle>
						Ссылка: <a :href="product.productLink" target="_blank">{{ product.productLink }}</a>
					</v-card-subtitle>
					<v-card-subtitle> Комментарий: {{ product.comment }} </v-card-subtitle>
					<v-card-subtitle> Стоимость: {{ product.price }} </v-card-subtitle>
				</v-card>
			</v-col>
		</v-row>
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

<script>
import { ref, computed } from 'vue'
import { useProductStore } from '@/stores/product'

export default {
	emits: ['add'],
	setup(_, context) {
		const productStore = useProductStore()
		const valid = ref(false)
		const isAlertVisible = ref(false)
		const productType = ref('')
		const price = ref('')
		const currency = ref('')
		const quantity = ref('')
		const productLink = ref('')
		const comment = ref('')
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
					productType: productType.value,
					currency: currency.value,
					price: convertedPrice.value,
					quantity: parseInt(quantity.value, 10),
					url: productLink.value,
					description: comment.value,
				}
				productStore.addProduct(newProduct)
				context.emit('add', {
					url: productLink.value,
					description: comment.value,
					price: parseInt(price.value),
					weight: 1,
				})
				showAlert()
				resetForm()
			}
		}

		const showAlert = () => {
			isAlertVisible.value = true
			setTimeout(() => {
				isAlertVisible.value = false
			}, 3000)
		}

		const resetForm = () => {
			productType.value = ''
			price.value = ''
			currency.value = ''
			quantity.value = ''
			productLink.value = ''
			comment.value = ''
		}

		return {
			valid,
			productType,
			price,
			currency,
			quantity,
			productLink,
			comment,
			currencies,
			rules,
			submit,
			showConvertedPrice,
			convertedPrice,
			productStore,
			isAlertVisible,
		}
	},
}
</script>

<style scoped>
.headline {
	font-weight: bold;
}
</style>
