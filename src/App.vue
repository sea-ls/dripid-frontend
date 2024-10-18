<template>
	<v-app>
		<Suspense>
			<MainLayout />
		</Suspense>
		<VueQueryDevtools />
	</v-app>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from './layouts/MainLayout.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

const drawer = ref(false)
</script>

<style>
@font-face {
	font-family: 'Kharkiv-Tone';
	src: url('@/assets/fonts/Kharkiv Tone 04.10.2020.ttf');
}

@font-face {
	font-family: 'onest';
	src: url('@/assets/fonts/Onest-VariableFont_wght.ttf');
}

* {
	font-family: onest, sans-serif;
}

body::-webkit-scrollbar {
	display: none;
}
</style>
