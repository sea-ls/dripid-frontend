<template>
  <v-layout>
    <AppHeader @menuClick="drawer = !drawer" @openMenu="drawer = !drawer"></AppHeader>
<!--    <AppFooter></AppFooter>-->

    <v-main>
      <router-view/>
    </v-main>




  </v-layout>

<!--  <v-fab-->
<!--      icon="mdi-chat"-->
<!--      color="indigo-accent-4"-->
<!--      appear-->
<!--      layout-->
<!--      app-->
<!--      location="bottom end"-->
<!--      extended-->
<!--      size="64"-->
<!--  ></v-fab>-->

  <v-speed-dial
      location="bottom end"
      transition="fade-transition"
      :close-on-content-click="false"
      close-on-back
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-fab
          icon="mdi-chat"
          color="indigo-accent-4"
          appear
          layout
          app
          location="bottom end"
          extended
          size="64"
          v-bind="activatorProps"
      ></v-fab>
    </template>


      <v-card width="300px" height="500px" rounded="xl" class="pa-0 bg-indigo-accent-4 d-flex justify-space-between flex-column">
        <template #title>
          <div class="d-flex justify-space-between pa-0 ma-0">
            <v-icon icon="mdi mdi-keyboard-backspace"></v-icon>
            drip id online
            <v-icon icon="mdi mdi-dots-vertical"></v-icon>
          </div>
        </template>
        <template #text>
          <div class="chat bg-white ">
            <div class="chat__primary d-flex justify-center align-center w-100">
              <p class="chat__primary-text">Мы на связи 24/7</p>
            </div>
            <div class="chat__input  w-100 border">
              <v-text-field  append-inner-icon="mdi-paperclip" density="compact" color="#304FFE" placeholder="Отправить сообщение..." small></v-text-field>
            </div>

          </div>
        </template>
      </v-card>


  </v-speed-dial>



</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import {provide, ref} from "vue";
import {useDisplay} from "vuetify";

export default {
  name: "MainLayout",
  components: {AppFooter, AppHeader},
  setup() {
    const drawer = ref(false);
    const {mobile} = useDisplay();
    const chat = ref(false);
    provide('drawer', drawer)


    return {
      drawer,
      mobile,
      chat
    }
  }
}
</script>

<style scoped lang="scss">
.chat {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  &__primary {
    color: #304FFE;
    height: 90%;
  }
  &__input {
    height: 10%;
  }
}
</style>
