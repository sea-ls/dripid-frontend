<template>
  <div class="canvas position-relative w-66">
    <span class="content-logo text-1 position-absolute">{{textTop}}</span>
    <span class="content-logo text-2 position-absolute">{{ textMiddle }}</span>
    <span class="content-logo  text-3 position-absolute">{{ textLow }}</span>
  </div>
</template>

<script>
export default {
  name: "MainContentCanvas",
  props: {
    textTop: String,
    textMiddle: String,
    textLow: String,
  },

}
</script>

<style scoped>
.canvas {
  height: 400px;
}
.content-logo {
  color: #304FFE;
  font-size: 8dvw;
  text-overflow: unset;
  font-weight: bold;
  word-break: normal;
}

.text-2 {
  top: 120px;
  left: 20%;
}
.text-3 {
  top: 240px;
  left: 30%;
}
</style>
