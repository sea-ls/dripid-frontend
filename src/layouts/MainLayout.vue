<template>
  <v-layout>
    <AppHeader @openMenu="drawer = !drawer"></AppHeader>
<!--    <AppFooter></AppFooter>-->

    <v-main>
      <router-view/>
    </v-main>

  </v-layout>

  <v-fab
      icon="mdi-chat"
      color="indigo-accent-4"
      appear
      layout
      app
      location="bottom end"
      text="Сайт использует cookie"
      extended
      size="64"
  ></v-fab>

</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {ref} from "vue";

export default {
  name: "MainLayout",
  components: {AppFooter, AppHeader},
  setup() {
    const drawer = ref(false)

    return {
      drawer
    }
  }
}
</script>

<style scoped>

</style>
