<template>
	<div>
		<h2 class="title">Бренды</h2>
		<div class="carousel-container">
			<div class="carousel">
				<div class="carousel-item" v-for="(image, index) in images" :key="index">
					<img :src="image" alt="Carousel Image" />
				</div>
				<div class="carousel-item" v-for="(image, index) in images" :key="index">
					<img :src="image" alt="Carousel Image" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.title {
	font-size: 2rem;
	color: #0011ff;
}
.carousel-container {
	width: 100%;
	height: 200px;
	position: relative;
	overflow: hidden;
}

.carousel {
	display: flex;
	flex-wrap: nowrap;
	animation: scroll linear infinite 12s;
	width: fit-content;
}

.carousel-item {
	flex: 0 0 auto;
	width: 200px;
	margin-right: 10px;
}

.carousel-item img {
	width: 100%;
	height: auto;
}

@keyframes scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
}
</style>
