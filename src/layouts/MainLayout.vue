<template>
	<v-layout>
		<AppHeader @menuClick="drawer = !drawer" @openMenu="drawer = !drawer" />
		<!-- <AppFooter /> -->
		<v-main>
			<router-view />
		</v-main>
	</v-layout>
	<!-- <v-fab icon="mdi-chat" color="indigo-accent-4" appear layout app location="bottom end" extended size="64" /> -->
	<v-speed-dial location="bottom end" transition="fade-transition" :close-on-content-click="false" close-on-back>
		<template v-slot:activator="{ props: activatorProps }">
			<v-fab
				icon="mdi-chat"
				color="indigo-accent-4"
				appear
				layout
				app
				location="bottom end"
				elevation="7"
				extended
				size="64"
				v-bind="activatorProps"
			/>
		</template>
		<v-card
			width="300px"
			height="500px"
			rounded="xl"
			class="pa-0 bg-indigo-accent-4 d-flex justify-space-between flex-column"
		>
			<template #title>
				<div class="d-flex justify-space-between pa-0 ma-0">
					<v-icon icon="mdi mdi-keyboard-backspace" />
					drip id online
					<v-icon icon="mdi mdi-dots-vertical" />
				</div>
			</template>
			<template #text>
				<div class="chat bg-white">
					<div class="chat__primary d-flex flex-column ga-3 pa-3 w-100">
						<p v-if="messages.length === 0" class="chat__primary-text my-auto align-self-center">
							Мы на связи 24/7
						</p>
						<v-chip
							v-else
							v-for="item of messages"
							:key="item.id"
							variant="elevated"
							:color="item.byUser && 'primary'"
							:class="item.byUser ? 'align-self-end' : 'align-self-start'"
						>
							{{ item.text }}
						</v-chip>
					</div>
					<div class="chat__input w-100 border">
						<v-form @submit.prevent="handleSendMessage()">
							<v-text-field
								v-model="message"
								append-inner-icon="mdi-paperclip"
								density="compact"
								color="#304FFE"
								placeholder="Отправить сообщение..."
								small
							/>
						</v-form>
					</div>
				</div>
			</template>
		</v-card>
	</v-speed-dial>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { provide, ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useSupportStore } from '@/stores/support'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { keycloak } from '@/use/auth'
import { fetchUserData } from '@/api/services/userService'
import { identityRole } from '@/helpers/roleHelper'

const store = useUserStore()
try {
	await keycloak.init({
		onLoad: 'check-sso',
		silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
		flow: 'standard',
		pkceMethod: 'S256',
	})
	if (keycloak.token) {
		localStorage.setItem('token', keycloak.token)
		const data = await fetchUserData()
		store.setAccountInfo(data.accountInfo)
		store.setAddresses(data.saveAddresses)
		store.serUserId(data.id)
		store.setUserRole(identityRole(keycloak))
	}
} catch (error) {
	console.error('Keycloak initialization failed', error)
}

const drawer = ref(false)
const message = ref('')
const { mobile } = useDisplay()
const supportStore = useSupportStore()
const { messages } = storeToRefs(supportStore)
provide('drawer', drawer)

const handleSendMessage = () => {
	messages.value.push({
		text: message.value,
		byUser: true,
		id: Date.now(),
	})
	message.value = ''
}
</script>

<style scoped lang="scss">
.chat {
	width: 100%;
	height: 400px;
	border-radius: 4px;
	&__primary {
		color: #304ffe;
		height: 90%;
	}
	&__input {
		height: 10%;
	}
}
</style>
