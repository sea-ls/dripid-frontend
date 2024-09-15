<template>
	<v-app-bar class="bg-white position-fixed d-flex align-center">
		<v-container class="pa-0 fill-height">
			<v-app-bar-nav-icon color="primary" v-if="mobile" @click="$emit('menuClick')" />
			<v-app-bar-title class="title cursor-pointer" @click="$router.push('/')">
				<span class="w-100">DRIP ID/</span>
			</v-app-bar-title>
			<v-spacer />
			<div class="d-flex justify-space-around links w-50" v-if="!mobile">
				<span class="link" @click="navigateTo('#roadmap')">Как это работает?</span>
				<span class="link" @click="navigateTo('#brands')">Где покупать</span>
				<span class="link" @click="navigateTo('#about')">О нас</span>
				<span class="link">Адреса складов</span>
				<span class="link" @click="navigateTo('#questions')"> Вопросы </span>
			</div>
			<v-spacer />

			<v-text-field
				v-if="!mobile"
				v-model="trackNumber"
				class="mr-2"
				placeholder="Отследить посылку"
				density="compact"
				rounded="xl"
				width="50px"
				color="#304FFE"
				variant="outlined"
				append-inner-icon="mdi-chevron-right"
				@click:append-inner="router.push({ name: 'track' })"
			/>

			<v-btn
				prepend-icon="mdi-account"
				color="indigo-accent-4"
				class="bg-grey-lighten-3 mr-1"
				rounded
				@click="authorization"
			>
				{{ store.isAuth ? `${store.accountInfo.firstName + ' ' + store.accountInfo.lastName}` : 'Вход' }}
			</v-btn>
			<v-icon
				class="cursor-pointer"
				icon="mdi-logout"
				color="#304FFE"
				v-if="store.isAuth"
				@click="openConfirmDialog()"
			>
			</v-icon>
		</v-container>
	</v-app-bar>
	<ConfirmDialog title="Выход" text="Вы уверены что хотите выйти?" />
</template>

<script>
import { useTrackStore } from '@/stores/track'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useDisplay, useGoTo } from 'vuetify'
import { useAuth } from '@/use/auth'
import AppCurs from '@/components/AppCurs.vue'
import { useUserStore } from '@/stores/user'
import { useConfirmStore } from '@/stores/confirm'
import ConfirmDialog from './ConfirmDialog.vue'
import { watch } from 'vue'

export default {
	name: 'AppHeader',
	components: { AppCurs, ConfirmDialog },
	setup() {
		const store = useUserStore()
		const confirmStore = useConfirmStore()
		const { mobile } = useDisplay()
		const router = useRouter()
		const trackStore = useTrackStore()
		const { trackNumber } = storeToRefs(trackStore)
		const goTo = useGoTo()
		const navigateTo = (selector) => {
			goTo(selector, { duration: 1000, offset: -85 })
		}
		const auth = useAuth()
		const { isConfirmed } = storeToRefs(confirmStore)
		const { openConfirmDialog } = confirmStore

		const logout = () => {
			router.push('/')
			auth.logOut()
		}

		watch(isConfirmed, (newValue, _) => {
			if (newValue) {
				logout()
			}
		})

		const authorization = () => {
			if (!store.isAuth) {
				auth.logIn().then(() => {
					router.push('/lk/menu')
				})
			} else {
				router.push('/lk/menu')
			}
		}

		if (store.isAuth) authorization()

		return {
			store,
			mobile,
			navigateTo,
			router,
			trackNumber,
			authorization,
			logout,
			openConfirmDialog,
		}
	},
}
</script>

<style scoped>
.link {
	color: #304ffe;
	text-decoration: none;
	cursor: pointer;
}

.title span {
	font-family: Kharkiv-Tone, sans-serif;
	color: #304ffe;
}

:deep(.v-toolbar-title) {
	flex: none;
}

:deep(.v-input__details) {
	display: none !important;
}
</style>
