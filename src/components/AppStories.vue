<template>
	<v-dialog max-width="390" min-height="700">
		<template v-slot:activator="{ props: activatorProps }">
			<AppCard :margin="true" v-bind="activatorProps" />
		</template>

		<v-carousel hide-delimiters max-width="390" height="700" class="rounded-xl">
			<template v-if="mobile" v-slot:prev="{ props }">
				<v-btn variant="plain" @click="props.onClick" class="mb-n15" min-height="85%" min-width="40%" />
			</template>
			<template v-if="mobile" v-slot:next="{ props }">
				<v-btn variant="plain" @click="props.onClick" class="mb-n15" min-height="85%" min-width="40%" />
			</template>
			<v-carousel-item v-for="story in stories" :key="story">
				<AppCard height="700" width="390" />
			</v-carousel-item>
		</v-carousel>
	</v-dialog>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue'
import { useDisplay } from 'vuetify'

const props = defineProps({
	stories: {
		type: Array,
	},
})
const { mobile } = useDisplay()
</script>

<style scoped></style>
