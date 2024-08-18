<template>
	<h1 class="title d-flex text-center justify-center">ГДЕ МОЙ ДРИП БОКС?</h1>
	<v-text-field
		v-model="trackNumber"
		placeholder="Номер отслежевания"
		density="comfortable"
		hide-details
		color="#304FFE"
		variant="solo-filled"
		:append-inner-icon="mobile && 'mdi-magnify'"
		flat
		class="rounded-xl position-relative overflow-hidden"
		@click:append-inner="onSearch"
	>
		<template #prepend-inner>
			<div class="pl-md-12 pl-6"></div>
		</template>
		<template #append-inner v-if="!mobile">
			<v-btn
				v-if="!mobile"
				color="#304FFE"
				class="h-100 px-16 rounded-0 position-absolute right-0"
				flat
				@click="onSearch"
			>
				Отследить посылку
			</v-btn>
		</template>
	</v-text-field>
	<v-card class="mt-3">
		<v-card-title> </v-card-title>
		<v-card-item>
			<h4 class="text-indigo-accent-4">Статус:</h4>
			<v-chip :color="info.color">{{ info.name }}</v-chip>
			<h4 class="text-indigo-accent-4">Описание:</h4>
			<p class="text-body-1">{{ info.desk }}</p>
		</v-card-item>
		<v-card-actions>
			<v-btn color="indigo-accent-4" @click="$router.push('/lk/menu')">Подтвердить</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { useTrackStore } from '@/stores/track'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify'
import { ref } from 'vue'
import { useOrdersStore } from '@/stores/orders'

export default {
	name: 'TrackPage',
	setup() {
		const { mobile } = useDisplay()
		const trackStore = useTrackStore()
		const orderStore = useOrdersStore()
		const { trackNumber } = storeToRefs(trackStore)
		const info = ref({})
		const isPanel = ref(false)

		function onSearch() {
			isPanel.value = true
			info.value = orderStore.checkTrack(trackNumber)
		}

		return {
			mobile,
			isPanel,
			trackNumber,
			onSearch,
			info,
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
