<template>
	<div class="canvas position-relative w-66">
		<span id="text-1" class="content-logo text-1 position-absolute">
			{{ textTop }}
		</span>
		<span class="content-logo text-2 position-absolute">
			{{ textMiddle }}
		</span>
		<span class="content-logo text-3 position-absolute">
			{{ textLow }}
		</span>
		<img class="snicker animate__animated animate__headShake animate__infinite" src="/snicker.png" alt="img" />
		<img class="belt animate__animated animate__headShake animate__infinite" src="/remen.png" alt="img" />
		<img class="bracelet animate__animated animate__headShake animate__infinite" src="/bracelet.png" alt="img" />
	</div>
</template>

<script>
export default {
	name: 'MainContentCanvas',
	props: {
		textTop: String,
		textMiddle: String,
		textLow: String,
	},
	setup() {},
}
</script>

<style scoped>
.canvas {
	height: 400px;
}
.content-logo {
	color: #0011ff;
	font-size: 6rem;
	text-overflow: unset;
	font-weight: bold;
	word-break: normal;
	position: absolute;
}

.text-1 {
	z-index: 10;
	font-family: Kharkiv-Tone, sans-serif;
}

.text-2 {
	top: 120px;
	translate: 50% 0;
	right: 50%;
	z-index: 10;
	font-family: Kharkiv-Tone, sans-serif;
}
.text-3 {
	top: 240px;
	translate: 70% 0;
	right: 30%;
	z-index: 10;
	font-family: Kharkiv-Tone, sans-serif;
}
.belt {
	position: absolute;
	top: 0;
	right: 0;
}
.snicker {
	position: absolute;
}
</style>
