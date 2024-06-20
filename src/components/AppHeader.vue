<template>
  <v-app-bar class="bg-indigo-accent-4 position-fixed">
    <v-container class="pa-0 fill-height">
      <v-app-bar-title  class="w-auto" @click="$router.push('/')">
        <p class="title">DRIP ID /</p></v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="d-flex justify-space-around links w-50">
        <router-link class="link" to="/">Заказать доставку</router-link>
        <router-link class="link" to="/">Проверка трек номера</router-link>
        <router-link class="link" to="/">Наши склады</router-link>
        <router-link class="link" to="/">Поддержка</router-link>
        <router-link class="link" to="/">Наши склады</router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-account"
             :text="isLogin ? 'Аккаунт' : 'Вход'"
             color="indigo-accent-4"
             class="bg-grey-lighten-3"
             rounded
             @click="$router.push('/lk')"
      >

      </v-btn>
    </v-container>

  </v-app-bar>
</template>

<script>
import {ref} from "vue";

export default {
  name: "AppHeader",
  setup() {
    const isLogin = ref(localStorage.getItem('token') === undefined || localStorage.getItem('token') === '');

    return {
      isLogin
    }
  }
}
</script>

<style scoped>
.link {
  color: white;
  text-decoration: none;
}
.title {
  font-family: Kharkiv-Tone, sans-serif;
}
</style>
