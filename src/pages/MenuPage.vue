<template>
<v-list color="gray"  class="bg-grey-lighten-4 pa-5" rounded="xl" >
  <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      subtitle="Баланс 0.00 ₽"
      title="Илья"
      @click="$router.push('/lk/personal')"
  >
  </v-list-item>
  <v-spacer></v-spacer>
  <v-list-item class="link" rounded="xl">
    <v-list-item-title @click="$router.push('/lk/orders')">Заказы</v-list-item-title>
  </v-list-item>
  <v-divider ></v-divider>
  <v-list-item class="link" rounded="xl">
    <v-list-item-title @click="$router.push('/lk/buy')">Заявка на выкуп</v-list-item-title>
  </v-list-item>
  <v-divider ></v-divider>

  <v-list-item class="link" rounded="xl">
    <v-list-item-title @click="$router.push('/lk/calc')">Калькулятор стоимости</v-list-item-title>
  </v-list-item>
  <v-divider ></v-divider>

  <v-list-item class="link" rounded="xl">
    <v-list-item-title @click="$router.push('/lk/track')">Трек номер</v-list-item-title>
  </v-list-item>


</v-list>
</template>

<script>
export default {
  name: "MenuPage",
  setup() {


  }
}
</script>

<style scoped>
.link:hover {
  background: #304FFE;
  cursor: pointer;
}
</style>
