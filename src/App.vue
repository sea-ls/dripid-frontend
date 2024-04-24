<template>
  <v-app>
    <v-layout>

      <AppHeader @openClick="drawer = false" @closeMenu="drawer = true"></AppHeader>

      <v-main>
        <v-navigation-drawer location="right" v-model="drawer">
          <v-list-item title="My Application" subtitle="Vuetify" ></v-list-item>
          <v-divider></v-divider>
          <v-list-item link title="List Item 1"></v-list-item>
          <v-list-item link title="List Item 2"></v-list-item>
          <v-list-item link title="List Item 3"></v-list-item>
        </v-navigation-drawer>
        <v-container>
          <div class="d-flex justify-center flex-column container-gap align-center">
            <v-carousel class="w-66" hide-delimiter-background>
              <v-carousel-item cover rounded
                               src="/carousel-1.jpg"
              ></v-carousel-item>

              <v-carousel-item
                src="/carousel-2.jpg"
              ></v-carousel-item>

              <v-carousel-item
                src="/carousel-3.jpg"
              ></v-carousel-item>
            </v-carousel>

            <MainContentCanvas
              text-top="DRIPID"
              text-middle="DRIPID"
              text-low="DRIPID"
            >

            </MainContentCanvas>

            <AppAboutWrapper>

            </AppAboutWrapper>

            <div class="d-flex justify-space-between w-66">
              <AppCard ></AppCard>
              <AppCard ></AppCard>
              <AppCard ></AppCard>
              <AppCard ></AppCard>


            </div>

            <MainContentCanvas
              text-top="ТЕКСТ"
              text-middle="ТЕКСТ"
              text-low="ТЕКСТ"
              class="mb-4"
            >

            </MainContentCanvas>


          </div>






        </v-container>
        <AppFooter></AppFooter>


      </v-main>

    </v-layout>

    <!--    <v-main>-->
    <!--    </v-main>-->

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

.container-gap {
  gap: 10vh;
}
</style>
