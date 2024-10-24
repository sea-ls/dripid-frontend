<template>
	<h1 class="title d-flex text-center justify-center">ГДЕ МОЙ ДРИП БОКС?</h1>
	<v-text-field
		v-model="trackNumber"
		placeholder="Номер отслеживания"
		density="comfortable"
		hide-details
		color="#0011ff"
		variant="solo-filled"
		:append-inner-icon="mobile ? 'mdi-magnify' : ''"
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
				color="#0011ff"
				class="h-100 px-16 rounded-0 position-absolute right-0"
				flat
				@click="onSearch"
			>
				Отследить посылку
			</v-btn>
		</template>
	</v-text-field>
	<v-card class="mt-3" v-if="isPanel">
		<v-card-title> </v-card-title>
		<v-card-item>
			<div class="d-flex ga-2 align-center mb-2">
				<h4 class="text-primary">Статус:</h4>
				<StatusChip :status-value="info.value" />
			</div>
			<h4 class="text-primary">Описание:</h4>
			<p class="text-body-1">{{ info.desk }}</p>
		</v-card-item>
	</v-card>
</template>

<script setup>
import { useTrackStore } from '@/stores/track'
import { storeToRefs } from 'pinia'
import { useDisplay } from 'vuetify'
import { ref } from 'vue'
import { useOrdersStore } from '@/stores/orders'
import StatusChip from '@/components/StatusChip.vue'

const { mobile } = useDisplay()
const trackStore = useTrackStore()
const { trackNumber } = storeToRefs(trackStore)
const info = ref({
	value: 'PROCESSING',
	name: 'В обработке',
	color: 'gray',
	desk: 'Ваш заказ обрабатывается модераторами, после выкупа с вас спишется сумма за доставку и товар. В случае нехватки денег с вами свяжется оператор',
})
const isPanel = ref(false)

function onSearch() {
	isPanel.value = true
}
</script>

<style scoped>
.title {
	font-family: Kharkiv-Tone, sans-serif;
	color: #0011ff;
}
</style>
