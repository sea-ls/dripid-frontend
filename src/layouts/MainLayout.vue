<template>
  <v-layout>
    <AppHeader @openMenu="drawer = !drawer"></AppHeader>
<!--    <AppFooter></AppFooter>-->
    <v-navigation-drawer location="right" v-model="drawer" class="position-fixed">
      <v-list-item link title="Заказать доставку"></v-list-item>
      <v-list-item link title="Проверка трек номера"></v-list-item>
      <v-list-item link title="Наши склады"></v-list-item>
      <v-list-item link title="Поддержка"></v-list-item>
      <v-list-item link title="Наши склады"></v-list-item>
    </v-navigation-drawer>


    <v-main>
      <router-view/>
    </v-main>


  </v-layout>

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
