<template>
  <div class="d-flex flex-column justify-center">
    <h2 class="roadmap-title">Как заказать доставку?</h2>
    <v-switch class="justify-center d-flex" color="#304FFE" inset v-model="selected"  :label="selected ? 'У меня есть зарубежная карта' : 'У меня нет зарубежной карты'"></v-switch>
    <div class="d-flex justify-center ga-10">
      <div v-if="selected" class="roadmap d-flex justify-space-between align-center  ga-2 flex-column" @click="selected = false">
        <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4">
          <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 1</v-card-title>
          <v-card-text>
            <h2 class="card-title ma-0">Регистрация</h2>
            <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
          </v-card-text>
        </v-card>
        <v-card width="300px" height="200px" rounded="xl" class="bg-grey-lighten-3">
          <v-card-title class="w-50 bg-indigo-accent-4 card-title">ШАГ 2</v-card-title>
          <v-card-text>
            <h2 class="ma-0">Покупка</h2>
            <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
          </v-card-text>
        </v-card>
        <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4">
          <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 3</v-card-title>
          <v-card-text>
            <h2 class="ma-0">Доставка</h2>
            <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
          </v-card-text>
        </v-card>
      </div>
      <div  v-else class="roadmap d-flex justify-space-between align-center  ga-2 flex-column" @click="selected = true">
        <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4">
          <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 1</v-card-title>
          <v-card-text>
            <h2 class="card-title ma-0">Регистрация</h2>
            <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
          </v-card-text>
        </v-card>
        <v-card width="300px" height="200px" rounded="xl" class="bg-grey-lighten-3">
          <v-card-title class="w-50 bg-indigo-accent-4 card-title">ШАГ 3</v-card-title>
          <v-card-text>
            <h2 class="ma-0">Покупка</h2>
            <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
          </v-card-text>
        </v-card>
        <v-card width="300px" height="200px" rounded="xl" class="bg-grey-lighten-3">
          <v-card-title class="w-50 bg-indigo-accent-4 card-title">ШАГ 2</v-card-title>
          <v-card-text>
            <h2 class="ma-0">Заявка</h2>
            <p class="card-text">Оставьте заявку на выкуп на сервисе DRIPID и получите персональный трек номер</p>
          </v-card-text>
        </v-card>

        <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4">
          <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 4</v-card-title>
          <v-card-text>
            <h2 class="ma-0">Доставка</h2>
            <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import {useDisplay} from "vuetify";

export default {
  name: "AppRoadmap",
  setup() {
    const selected = ref(false);
    const {mobile} = useDisplay();

    return {
      selected,
      mobile
    }
  }
}
</script>

<style scoped lang="scss">
.selected-title {
  color: #304FFE;
}
.card-title {
  margin: 20px;
  border-radius: 20px;
}

.roadmap {
  margin-top: 50px;
  cursor: pointer;

  &-title {
    font-size: 4rem;
    text-align: center;
    color: #304FFE;
  }
}
</style>
