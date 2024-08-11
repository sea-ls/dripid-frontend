<template>
	<v-card
		width="300px"
		height="200px"
		rounded="xl"
		:class="{
			'bg-indigo-accent-4': cardStyle === 'blue',
			'bg-grey-lighten-3': cardStyle === 'grey',
		}"
	>
		<v-card-title
			:class="{
				'bg-grey-lighten-3 ': cardStyle === 'blue',
				'bg-indigo-accent-4': cardStyle === 'grey',
			}"
			class="w-50 card-title"
		>
			{{ 'ШАГ ' + index }}
		</v-card-title>
		<v-card-text>
			<h2 class="card-title ma-0">{{ subtitle }}</h2>
			<p class="card-text">{{ text }}</p>
		</v-card-text>
	</v-card>
</template>

<script>
import { computed } from 'vue'

export default {
	name: 'RoadmapCard',
	props: {
		index: {
			required: true,
			type: Number,
		},
		title: '',
		subtitle: '',
		text: '',
	},
	setup(props) {
		const cardStyle = computed(() => (props.index % 2 === 0 ? 'grey' : 'blue'))

		return { cardStyle }
	},
}
</script>

<style scoped>
.selected-title {
	color: #304ffe;
}

.card-title {
	margin: 20px;
	border-radius: 20px;
}
</style>
