<template>
  <div>
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

        <div class="d-flex justify-space-between  w-66">
          <AppCard></AppCard>
          <AppCard></AppCard>
          <AppCard></AppCard>
          <AppCard></AppCard>


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


  </div>

</template>

<script>
import MainContentCanvas from "@/components/MainContentCanvas.vue";
import AppAboutWrapper from "@/components/AppAboutWrapper.vue";
import AppCard from "@/components/AppCard.vue";

export default {
  name: "MainPage",
  components: {AppCard, AppAboutWrapper, MainContentCanvas}
}
</script>

<style scoped>
.container-gap {
  gap: 10vh;
}
.main {
  overflow-y: scroll;
}
</style>
