<template>
	<v-app>
		<router-view v-if="isAuth" />
		<v-progress-circular
			v-else
			class="d-flex mt-16 align-self-center"
			model-value="20"
			color="primary"
			:size="256"
			:width="20"
			indeterminate
		/>
	</v-app>
</template>

<script setup>
import { ref } from 'vue'
import { initKeycloak } from './use/auth'
import { useUserStore } from './stores/user'
import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const { isAuth } = storeToRefs(userStore)

initKeycloak()

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
