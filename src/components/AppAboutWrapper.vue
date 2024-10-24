<template>
	<!-- <div class="about bg-primary align-center d-flex flex-column position-relative">
		<h2 class="about-header">О НАС</h2>
	</div> -->
	<v-card class="about bg-primary d-flex flex-column align-center position-relative w-100">
		<v-card-title>
			<h2 class="about-header">О НАС</h2>
		</v-card-title>
		<p class="about-text">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum fugiat odit porro quos temporibus
			voluptas. Aliquam cumque doloremque earum ipsam officiis qui saepe similique tenetur, ut voluptatum.
			Reiciendis, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut blanditiis
			consequuntur culpa dolor eligendi, eos ex in iusto laborum officiis quaerat quisquam reiciendis rem
			repellendus repudiandae veritatis vero voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Ducimus earum fugiat odit porro quos temporibus voluptas. Aliquam cumque doloremque earum ipsam officiis qui
			saepe similique tenetur, ut voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
			earum fugiat odit porro quos temporibus voluptas. Aliquam cumque doloremque earum ipsam officiis qui saepe
			similique tenetur, ut voluptatum.
		</p>
	</v-card>
</template>

<script>
export default {
	name: 'AppAboutWrapper',
}
</script>

<style scoped>
.about {
	border-radius: 80px;
	min-height: 85vh;
	padding: 70px 210px;
}

.about-header {
	font-size: 7rem;
	font-family: Kharkiv-Tone, sans-serif;
	font-weight: normal;
}

.about-text {
	font-size: 26px;
	text-align: center;
}
</style>
