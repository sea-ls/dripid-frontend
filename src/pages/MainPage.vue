<template>
	<div>
		<v-navigation-drawer v-if="mobile" v-model="drawer" class="position-fixed">
			<v-list-item @click="navigateTo('#roadmap')"> Как это работает? </v-list-item>
			<v-list-item @click="navigateTo('#brands')">Где покупать</v-list-item>
			<v-list-item @click="navigateTo('#about')">О нас</v-list-item>
			<v-list-item @click="navigateTo('#questions')">Вопросы</v-list-item>
		</v-navigation-drawer>

		<div class="img d-flex align-center flex-column">
			<h1 class="img-title text-h1 text-center">DRIP ID!</h1>
			<p class="img-text text-h4 ma-10">
				DRIP ID - Сервис достаок посылок из-за рубежа, с помощью которго вы сможете получать в РФ свои покупки
				из США, ЕС, Китая, Турции и ОАЭ
			</p>
		</div>
		<v-container>
			<div class="d-flex justify-center flex-column container-gap align-center">
				<MainContentCanvas text-top="DRIPID" text-middle="DRIPID" text-low="DRIPID" />

				<div class="w-100" id="roadmap">
					<AppRoadmap />
				</div>

				<div class="w-100" id="brands">
					<AppBrands :images="carouselImages" />
				</div>

				<div class="w-100">
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
						:append-inner-icon="mobile ? 'mdi-chevron-right' : ''"
						@click:append-inner="router.push({ name: 'track' })"
					>
						<template #prepend-inner>
							<div class="pl-md-12 pl-6"></div>
						</template>
						<template #append-inner v-if="!mobile">
							<v-btn
								@click="router.push({ name: 'track' })"
								v-if="!mobile"
								color="#304FFE"
								class="h-100 px-16 rounded-0 position-absolute right-0"
								flat
							>
								Отследить посылку
							</v-btn>
						</template>
					</v-text-field>
				</div>

				<AppAboutWrapper id="about" />

				<div class="d-flex justify-space-between align-center w-100 ga-2 flex-column flex-md-row">
					<v-slide-group selected-class="bg-primary" show-arrows>
						<v-slide-group-item v-for="n in 15" :key="n">
							<AppStories :stories="new Array(15)" />
						</v-slide-group-item>
					</v-slide-group>
				</div>

				<v-card width="100%" class="bg-grey-lighten-3 pa-10" :rounded="'xl'" title="Расчет стоимости">
					<template #text class="w-33">
						<v-select
							clearable
							variant="outlined"
							:items="['Китай', 'США', 'Германия']"
							label="Откуда"
							color="primary"
						/>
						<v-text-field placeholder="Страна, город" color="primary" variant="outlined" />
						<div class="d-flex justify-space-between">
							<div class="field">
								<v-text-field
									color="primary"
									variant="outlined"
									placeholder="Вес"
									v-model="range"
									:step="0.5"
									type="number"
								/>
								<v-btn-toggle v-model="buttonToggle" class="mb-5">
									<v-btn icon="mdi-cellphone"></v-btn>
									<v-btn icon="mdi-tshirt-crew"></v-btn>
									<v-btn icon="mdi-shoe-sneaker"></v-btn>
								</v-btn-toggle>
							</div>
						</div>
						<v-slider color="primary" :min="0" :max="20" :step="0.5" v-model="range" thumb-label />
					</template>
				</v-card>

				<AppFooter id="questions" />
			</div>
		</v-container>
	</div>
</template>

<script>
import MainContentCanvas from '@/components/MainContentCanvas.vue'
import AppAboutWrapper from '@/components/AppAboutWrapper.vue'
import AppCard from '@/components/AppCard.vue'
import AppFooter from '@/components/AppFooter.vue'
import { useDisplay, useGoTo } from 'vuetify'
import { inject, provide, ref, watch } from 'vue'
import AppRoadmap from '@/components/roadmap/AppRoadmap.vue'
import AppStories from '@/components/AppStories.vue'
import { useTrackStore } from '@/stores/track'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import AppBrands from '@/components/AppBrands.vue'

export default {
	name: 'MainPage',
	components: {
		AppStories,
		AppRoadmap,
		AppFooter,
		AppCard,
		AppAboutWrapper,
		MainContentCanvas,
		AppBrands,
	},
	setup() {
		const { mobile } = useDisplay()
		const drawer = inject('drawer')
		const trackStore = useTrackStore()
		const { trackNumber } = storeToRefs(trackStore)
		const range = ref(null)
		const buttonToggle = ref(null)

		watch(buttonToggle, (newVal, _) => {
			switch (newVal) {
				case 0:
					range.value = 2
					break
				case 1:
					range.value = 5
					break
				case 2:
					range.value = 10
					break
				default:
					range.value = 0
					break
			}
		})
		const router = useRouter()
		const carouselImages = ref([
			'https://via.placeholder.com/200x200?text=Image1',
			'https://via.placeholder.com/200x200?text=Image2',
			'https://via.placeholder.com/200x200?text=Image3',
			'https://via.placeholder.com/200x200?text=Image4',
			'https://via.placeholder.com/200x200?text=Image5',
			'https://via.placeholder.com/200x200?text=Image6',
			'https://via.placeholder.com/200x200?text=Image7',
			'https://via.placeholder.com/200x200?text=Image8',
			'https://via.placeholder.com/200x200?text=Image9',
			'https://via.placeholder.com/200x200?text=Image10',
			'https://via.placeholder.com/200x200?text=Image11',
			'https://via.placeholder.com/200x200?text=Image12',
			'https://via.placeholder.com/200x200?text=Image13',
			'https://via.placeholder.com/200x200?text=Image14',
			'https://via.placeholder.com/200x200?text=Image15',
			'https://via.placeholder.com/200x200?text=Image16',
			'https://via.placeholder.com/200x200?text=Image17',
			'https://via.placeholder.com/200x200?text=Image18',
			'https://via.placeholder.com/200x200?text=Image19',
			'https://via.placeholder.com/200x200?text=Image20',
			'https://via.placeholder.com/200x200?text=Image21',
			'https://via.placeholder.com/200x200?text=Image22',
		])

		const goTo = useGoTo()
		const navigateTo = (selector) => {
			goTo(selector)
		}

		return {
			mobile,
			drawer,
			range,
			navigateTo,
			trackNumber,
			router,
			carouselImages,
			buttonToggle,
		}
	},
}
</script>

<style scoped lang="scss">
.container {
	max-width: 100vw;
	padding: 4rem;
}
.container-gap {
	gap: 10vh;
}
.img-title {
	font-size: 50px;
	color: #304ffe;
	font-family: Kharkiv-Tone, sans-serif;
	display: none;
}
.img-text {
	width: 50vw;
	color: black;
	text-align: center;
}
.img {
	background-image: url('/main-page.jpg');
	background-size: cover;
	//background-position: center;
	width: 100%;
	height: 95vh;
}
.main {
	overflow-y: scroll;
}
.carousel {
	width: 350px;
	height: 400px;
}
.field {
	width: 200px;
}
.title {
	font-family: Kharkiv-Tone, sans-serif;
	color: #304ffe;
}
</style>
