<template>
<h1 class="title d-flex text-center justify-center">ГДЕ МОЙ ДРИП БОКС?</h1>
  <v-text-field placeholder="Номер отслежевания" rounded="xl" color="#304FFE" variant="outlined">
    <template #append v-if="!mobile">
      <v-btn color="#304FFE" rounded="xl">Отследить посылку</v-btn>
    </template>
  </v-text-field>
</template>

<script>
import {useDisplay} from "vuetify";

export default {
  name: "TrackPage",
  setup() {
    const {mobile} = useDisplay()

    return {
      mobile
    }
  }
}
</script>

<style scoped>
.title {
  font-family: Kharkiv-Tone, sans-serif;
  color: #304FFE;
}

</style>
