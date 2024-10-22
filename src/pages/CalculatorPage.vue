<template>
	<v-row>
		<v-col>
			<AppCalculator width="700" title="Расчёт стоимости" />
		</v-col>
		<v-col>
			<v-card :width="mobile ? '100%' : '350px'" class="bg-grey-lighten-4 pa-10 h-100" elevation="0" rounded="xl">
				<p class="text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos fuga quae vel porro, inventore
					cupiditate, voluptates exercitationem ipsum recusandae nihil reiciendis ad delectus labore. Id
					voluptates facere sed dolores officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Dignissimos fuga quae vel porro, inventore cupiditate, voluptates exercitationem ipsum recusandae
					nihil reiciendis ad delectus labore. Id voluptates facere sed dolores officia.
				</p>
			</v-card>
		</v-col>
	</v-row>
	<v-row>
		<v-col>
			<v-card
				:width="mobile ? '100%' : '700px'"
				class="bg-transparent pa-10 h-100 d-flex align-center"
				elevation="0"
				rounded="xl"
			>
				<p class="text text-center">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos fuga quae vel porro, inventore
					cupiditate, voluptates exercitationem ipsum recusandae nihil reiciendis ad delectus labore. Id
					voluptates facere sed dolores officia.
				</p>
			</v-card>
		</v-col>
		<v-col>
			<v-card :width="mobile ? '100%' : '350px'" class="bg-grey-lighten-4 pa-10 h-100" elevation="0" rounded="xl">
				<p class="text">Lorem ipsum</p>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import AppCalculator from '@/components/AppCalculator.vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const { mobile } = useDisplay()
</script>

<style scoped>
.text {
	color: #2546fd;
	font-size: 17px;
	font-weight: 500;
}
</style>
