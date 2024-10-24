<template>
	<AppCardStories
		:class="['card  d-flex align-end', margin && 'mx-2']"
		color="primary"
		:width="width"
		:height="height"
	>
		<v-card-title class="mb-12 ml-10">
			<p>Доставка</p>
		</v-card-title>
	</AppCardStories>
</template>

<script>
export default {
	name: 'AppCard',
	props: {
		width: {
			default: 400,
		},
		height: {
			default: 750,
		},
		margin: {
			type: Boolean,
			default: false,
		},
	},
	setup() {},
}
</script>

<style scoped>
p {
	font-family: 'Kharkiv-Tone';
	text-transform: uppercase;
	font-size: 36px;
}
</style>
