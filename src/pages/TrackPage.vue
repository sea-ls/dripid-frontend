<template>
	<h1 class="title d-flex text-center justify-center">ГДЕ МОЙ ДРИП БОКС?</h1>
	<v-text-field
		v-model="trackNumber"
		placeholder="Номер отслежевания"
		density="comfortable"
		hide-details
		color="#304FFE"
		variant="solo-filled"
		flat
		class="rounded-xl position-relative overflow-hidden"
	>
		<template #prepend-inner>
			<div class="pl-12" />
		</template>
		<template #append-inner v-if="!mobile">
			<v-btn v-if="!mobile" color="#304FFE" class="h-100 px-16 rounded-0 position-absolute right-0" flat>
				Отследить посылку
			</v-btn>
		</template>
	</v-text-field>
</template>

<script>
import { useTrackStore } from '@/stores/track'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify'

export default {
	name: 'TrackPage',
	setup() {
		const { mobile } = useDisplay()
		const trackStore = useTrackStore()
		const { trackNumber } = storeToRefs(trackStore)

		return {
			mobile,
			trackNumber,
		}
	},
}
</script>

<style scoped>
.title {
	font-family: Kharkiv-Tone, sans-serif;
	color: #304ffe;
}
</style>
