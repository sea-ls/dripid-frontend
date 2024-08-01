<template>
  <div>
    <div class="d-flex flex-column justify-center" v-if="mobile">
      <h2 class="roadmap-title">Как заказать доставку?</h2>
      <v-switch class="justify-center d-flex" color="#304FFE" inset v-model="selected"
                :label="selected ? 'У меня есть зарубежная карта' : 'У меня нет зарубежной карты'"></v-switch>
      <div class="d-flex justify-center ga-10">
        <div v-if="selected" class="roadmap d-flex justify-space-between align-center  ga-2 flex-column"
             @click="selected = false">

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
        <div v-else class="roadmap d-flex justify-space-between align-center  ga-2 flex-column"
             @click="selected = true">
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
          <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4 roadmap__block">
            <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 4</v-card-title>
            <v-card-text>
              <h2 class="ma-0">Доставка</h2>
              <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-center" v-else>
      <h2 class="roadmap-title">Как заказать доставку?</h2>
      <div class="d-flex justify-center ga-10">
        <div>
          <p class="text-h5">У меня есть зарубежная карта</p>
          <div :class="selected ? 'blur' : ''" class="roadmap d-flex justify-space-between align-center  ga-2 flex-column"
               @click="selected = false">
            <RoadmapCard
                v-for="(card, i) in withCardRoadmapData"
                :key="card.subtitle"
                :subtitle="card.subtitle"
                :text="card.text"
                :index="++i"
            ></RoadmapCard>
          </div>
        </div>

        <div>
          <p class="text-h5">У меня нет зарубежной карты</p>
          <div :class="selected ? '' : 'blur'" class="roadmap d-flex justify-space-between align-center  ga-2 flex-column"
               @click="selected = true">
            <RoadmapCard
                v-for="(card, i) in withoutCardRoadmap"
                :key="card.subtitle"
                :subtitle="card.subtitle"
                :text="card.text"
                :index="++i"
            ></RoadmapCard>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
import {ref} from "vue";
import {useDisplay} from "vuetify";
import RoadmapCard from "@/components/roadmap/AppRoadmapCard.vue";

export default {
  name: "AppRoadmap",
  components: {RoadmapCard},
  setup() {
    const selected = ref(false);
    const {mobile} = useDisplay();

    const withCardRoadmapData = [
      {
        subtitle: 'Регистрация',
        text: 'Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес'
      },
      {
        title: 'ШАГ 2',
        subtitle: 'Покупка',
        text: 'Покупайте в Интернет-магазинах США, укажите свой персональный адрес при покупке'
      },
      {
        title: 'ШАГ 3',
        subtitle: 'Доставка',
        text: 'Упаковка и быстрое получение из любой точки мира'
      },
    ]

    const withoutCardRoadmap = [
      {
        subtitle: 'Регистрация',
        text: 'Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес'
      },
      {
        title: 'ШАГ 2',
        subtitle: 'Покупка',
        text: 'Покупайте в Интернет-магазинах США, укажите свой персональный адрес при покупке'
      },
      {
        title: 'ШАГ 3',
        subtitle: 'Доставка',
        text: 'Упаковка и быстрое получение из любой точки мира'
      },
      {
        title: 'ШАГ 4',
        subtitle: 'Доставка',
        text: 'Упаковка и быстрое получение из любой точки мира'
      },
    ]

    return {
      selected,
      mobile,
      withCardRoadmapData,
      withoutCardRoadmap
    }
  }
}
</script>

<style scoped lang="scss">

.blur {
  filter: blur(20px);
}


.roadmap__block {
  background: #304FFE !important;
  filter: blur(5px) !important;
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
