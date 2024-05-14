<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import MainContentCanvas from "@/components/MainContentCanvas.vue";
import AppAboutWrapper from "@/components/AppAboutWrapper.vue";
import AppCard from "@/components/AppCard.vue";
import AppFooter from "@/components/AppFooter.vue";
import {ref} from "vue";

const drawer = ref(false)
</script>

<style>

@font-face {
  font-family: 'Kharkiv-Tone';
  src: url("@/assets/fonts/Kharkiv Tone 04.10.2020.ttf");
}

* {
  font-family: Kharkiv-Tone, sans-serif;
}

body::-webkit-scrollbar {
  display: none;
}
</style>
