<template>
	<div>
		<v-container>
			<v-form>
				<v-text-field placeholder="Тип товара" />
				<v-text-field placeholder="Стоимость" />
				<v-text-field placeholder="Фактический адрес доставки" />
				<v-text-field placeholder="Кол-во" />
			</v-form>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'BuyApplicationPage',
}
</script>

<style scoped></style>
