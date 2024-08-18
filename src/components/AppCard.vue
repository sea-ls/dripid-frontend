<template>
	<v-card :class="['card bg-indigo-accent-4', margin && 'mx-2']" :width="width" :height="height" rounded="xl">
		<template #title>
			<h3 class="pa-2">Доставка</h3>
		</template>
	</v-card>
</template>

<script>
export default {
	name: 'AppCard',
	props: {
		width: {
			default: 280,
		},
		height: {
			default: 500,
		},
		margin: {
			type: Boolean,
			default: false,
		},
	},
	setup() {},
}
</script>

<style scoped></style>
