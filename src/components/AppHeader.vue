<template>
  <v-app-bar class="bg-white position-fixed">
    <v-container class="pa-0 fill-height">
      <v-app-bar-nav-icon color="primary" v-if="mobile" @click="$emit('menuClick')"></v-app-bar-nav-icon>
      <v-app-bar-title  class="title" @click="$router.push('/')"><span class="w-100">DRIP ID/</span></v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="d-flex justify-space-around links w-50" v-if="!mobile">
        <router-link class="link" to="/">Как это работает?</router-link>
        <router-link class="link" to="/">Бренды</router-link>
        <router-link class="link" to="/">Помощь</router-link>
        <router-link class="link" to="/">Вопросы</router-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn prepend-icon="mdi-account"
             :text="isLogin ? 'Аккаунт' : 'Вход'"
             color="indigo-accent-4"
             class="bg-grey-lighten-3 mr-1"
             rounded
             @click="$router.push('/lk/personal')"
      >

      </v-btn>
    </v-container>

  </v-app-bar>
</template>

<script>
import {ref} from "vue";
import {useDisplay} from "vuetify";

export default {
  name: "AppHeader",
  setup() {
    const isLogin = ref(localStorage.getItem('token') === undefined || localStorage.getItem('token') === '');
    const {mobile} = useDisplay();

    return {
      isLogin,
      mobile
    }
  }
}
</script>

<style scoped>
.link {
  color: #304FFE;
  text-decoration: none;
}
.title span {
  font-family: Kharkiv-Tone, sans-serif;
  color: #304FFE;
}
:deep(.v-toolbar-title) {
  flex: none;
}
</style>
