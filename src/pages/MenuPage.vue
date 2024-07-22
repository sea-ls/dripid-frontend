<template>
<v-list color="gray" class="bg-grey-lighten-4 pa-5" rounded="xl" :items="items">
  <template v-slot:subtitle="{ subtitle }">
    <div v-html="subtitle"></div>
  </template>
</v-list>
</template>

<script>
export default {
  name: "MenuPage",
  setup() {
    const items = [
      { type: 'header', title: 'Илья', prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
      { type: 'subheader', title: 'Баланс 0.0р ', prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',},
      {type: 'spacer'},

      {
        title: 'Заказы',
      },
      { type: 'divider', inset: true },
      {
        title: 'Заявка на выкуп',
      },
      { type: 'divider', inset: true },
      {
        title: 'Калькулятор стоимости',
      },
      { type: 'divider', inset: true },
      {
        title: 'Трек номер',
      },
      { type: 'divider', inset: true },
      {type: 'spacer'},
      { type: 'subheader', title: 'Нужна помощь?' },
    ]

    return {
      items
    }
  }
}
</script>

<style scoped>

</style>
