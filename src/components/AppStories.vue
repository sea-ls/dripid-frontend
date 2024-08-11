<template>
	<v-dialog max-width="390" min-height="700">
		<template v-slot:activator="{ props: activatorProps }">
			<AppCard v-bind="activatorProps" />
		</template>

		<v-carousel hide-delimiters max-width="390" height="700">
			<v-carousel-item v-for="story in stories" :key="story">
				<AppCard :height="700" :width="390" />
			</v-carousel-item>
		</v-carousel>
	</v-dialog>
</template>

<script>
import AppCard from '@/components/AppCard.vue'

export default {
	name: 'AppStories',
	components: { AppCard },
	props: {
		stories: {
			type: Array,
		},
	},
	setup() {},
}
</script>

<style scoped></style>
