<template>
	<v-footer class="footer bg-primary pa-0" rounded="xl">
		<v-container class="pa-0 d-flex flex-column h-100">
			<v-row class="border-b-md border-white justify-center ma-0">
				<v-col class="pa-5 flex-grow-0">
					<h2 :class="[xlAndUp ? 'h2-xl' : 'text-md-h1 text-h2']">DRIP&nbsp;ID</h2>
				</v-col>
			</v-row>

			<v-row class="ma-0 flex-column flex-xl-row">
				<v-col :class="[xlAndUp ? 'border-e-md' : 'border-b-md', 'border-white d-flex pa-10']">
					<v-row class="flex-column flex-md-row">
						<v-col class="d-flex flex-column justify-space-between">
							<div>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur
								consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod
								reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum
								veritatis.
							</div>
							<div><AppCurs></AppCurs></div>
						</v-col>
						<v-col>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur
								consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod
								reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum
								veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione provident
								expedita necessitatibus illo, quam nesciunt cupiditate eaque laborum cumque quis ipsa ad
								enim veritatis voluptatem, natus nam corporis. Perspiciatis, deleniti!
							</div>
							<div>{{ new Date().getFullYear() }} — <strong>drip id</strong></div>
						</v-col>
					</v-row>
				</v-col>

				<v-col class="align-self-end pa-10">
					<v-row class="flex-column flex-sm-row">
						<v-col class="contacts d-flex">
							<div class="d-flex flex-column justify-space-between ga-3">
								<a class="link" href="#">Telegram</a>
								<a class="link" href="#">VK</a>
								<a class="link" href="#">INSTAGRAM</a>
							</div>
						</v-col>
						<v-col>
							<div>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur
								consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod
								reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum
								veritatis.
							</div>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-footer>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs'
import AppCurs from './AppCurs.vue'

export default {
	name: 'AppFooter',
	setup() {
		const { xlAndUp } = useDisplay()

		return {
			xlAndUp,
		}
	},
}
</script>

<style scoped lang="scss">
.footer {
	font-size: 1.2rem;
}
.h2-xl {
	font-size: 20rem;
}
h2 {
	font-weight: 400;
	line-height: 1;
	font-family: Kharkiv-Tone, sans-serif;
}
.border-white {
	border-color: white !important;
}
.link {
	color: #fff;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
}
.contacts {
	flex-grow: 0.5;
}
</style>
