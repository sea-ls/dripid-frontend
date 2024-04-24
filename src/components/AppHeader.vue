<template>
 <v-app-bar class="bg-indigo-accent-4">
   <v-app-bar-title>DRIP ID /</v-app-bar-title>
   <v-spacer></v-spacer>

   <v-btn icon="mdi-account">
   </v-btn>

   <v-btn icon="mdi-menu" @mouseenter="$emit('openMenu')" @mouseleave="$emit('closeMenu')">
     <v-icon>mdi-menu</v-icon>
   </v-btn>

 </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

 </style>
