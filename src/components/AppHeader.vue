<template>
  <v-app-bar class="bg-indigo-accent-4 position-fixed">
    <v-container class="pa-0 fill-height">
      <v-app-bar-title @click="$router.push('/')">DRIP ID /</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-account" @click="$router.push('/lk')">
      </v-btn>

      <v-btn icon="mdi-menu" @click="$emit('openMenu')">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>

  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>
