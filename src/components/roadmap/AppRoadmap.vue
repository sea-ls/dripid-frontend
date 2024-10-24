<template>
	<v-carousel hide-delimiters :continuous="false" height="100%">
		<template v-slot:prev="{ props }">
			<v-btn :ripple="false" class="slide-btn prev" color="white" variant="plain" @click="props.onClick">
				<img width="100px" :src="arrow" alt="" />
			</v-btn>
		</template>
		<template v-slot:next="{ props }">
			<v-btn :ripple="false" class="slide-btn next" color="white" variant="plain" @click="props.onClick">
				<img width="100px" :src="arrow" alt="" />
			</v-btn>
		</template>
		<v-carousel-item>
			<v-container>
				<v-sheet height="90vh" class="roadmap" elevation="0" color="primary">
					<div class="description d-flex flex-column justify-center align-center mt-16">
						<h2 class="roadmap-title">Как оплатить?</h2>
						<p>Если у вас есть иностранная карта, следуйте этим 4 шагам.</p>
						<p>Если иностранной карты нет - мы поможем! Листай информацию дальше</p>
					</div>
					<div class="with-card">
						<v-card elevation="0" class="card card-1">
							Зарегистрируйтесь на сервисе DRIPID и получите персональный адрес
						</v-card>
						<v-card elevation="0" class="card card-2">
							Покупайте в Интернет-магазинах США, укажите свой персональный адрес при покупке
						</v-card>
						<v-card elevation="0" class="card card-3"
							>Упаковка и быстрое получение из любой точки мира</v-card
						>
						<v-card elevation="0" class="card card-4"
							>Упаковка и быстрое получение из любой точки мира</v-card
						>
					</div>
				</v-sheet>
			</v-container>
		</v-carousel-item>
		<v-carousel-item>
			<v-container>
				<v-sheet height="90vh" class="roadmap" elevation="0" color="primary">
					<div class="description d-flex flex-column justify-center align-center mt-16">
						<h2 class="roadmap-title">Как оплатить?</h2>
						<p>Если у вас нет иностранной карты, следуйте этим 4 шагам!</p>
					</div>
					<div class="with-card">
						<v-card elevation="0" class="card card-1">
							Зарегистрируйтесь на сервисе DRIPID и получите персональный адрес
						</v-card>
						<v-card elevation="0" class="card card-2">
							Покупайте в Интернет-магазинах США, укажите свой персональный адрес при покупке
						</v-card>
						<v-card elevation="0" class="card card-3"
							>Упаковка и быстрое получение из любой точки мира</v-card
						>
						<v-card elevation="0" class="card card-4"
							>Упаковка и быстрое получение из любой точки мира</v-card
						>
					</div>
				</v-sheet>
			</v-container>
		</v-carousel-item>
	</v-carousel>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import RoadmapCard from '@/components/roadmap/AppRoadmapCard.vue'
import arrow from '@/assets/arrow.png'

const selected = ref(false)
const { mobile } = useDisplay()
</script>

<style scoped lang="scss">
.slide-btn {
	position: absolute;
	top: 150px;
	&.prev {
		rotate: 180deg;
		left: 160px;
		top: 220px;
	}
	&.next {
		right: 160px;
	}
}

.roadmap {
	margin-top: 50px;
	border-radius: 70px;
	display: flex;
	flex-direction: column;

	&-container {
		height: 80vh;
	}

	&-title {
		font-size: 4rem;
		text-align: center;
		text-transform: uppercase;
		font-weight: normal;
		font-family: 'Kharkiv-Tone', sans-serif;
	}
	.description {
		p {
			font-size: 20px;
		}
		margin-bottom: 90px;
	}
	.with-card {
		background-image: url('@/assets/arrows.png');
		background-repeat: no-repeat;
		background-size: contain;
		position: relative;
		height: 100%;
		width: 800px;
		margin-left: 350px;
		.card {
			width: 330px;
			height: 120px;
			border-radius: 30px;
			padding: 25px;
			display: flex;
			align-items: center;
			position: absolute;
			&-1 {
				bottom: 320px;
				left: -55px;
				transform: rotate(-5deg);
			}
			&-2 {
				bottom: 120px;
				left: 155px;
				transform: rotate(10deg);
			}
			&-3 {
				bottom: 320px;
				left: 455px;
				transform: rotate(-13deg);
			}
			&-4 {
				bottom: 100px;
				left: 855px;
				transform: rotate(4deg);
			}
		}
	}
}
</style>
