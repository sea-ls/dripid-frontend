<template>
  <div>
    <div class="d-flex flex-column justify-center">
      <h2 class="roadmap-title">Как заказать доставку?</h2>
      <v-switch class="justify-center d-flex" color="#304FFE" inset v-model="selected"
                :label="selected ? 'У меня есть зарубежная карта' : 'У меня нет зарубежной карты'"></v-switch>
      <div class="d-flex justify-center ga-10">
          <div :class="[selected ? 'blur d-none' : 'd-block' ,'d-md-block roadmap']"
               @click="selected = false">
            <RoadmapCard
                class="mb-2"
                v-for="(card, i) in withCardRoadmapData"
                :key="card.subtitle"
                :subtitle="card.subtitle"
                :text="card.text"
                :index="++i"
            ></RoadmapCard>
          </div>

          <div :class="[!selected ? 'blur d-none' : 'd-block', 'd-md-block roadmap']"
               @click="selected = true">
            <RoadmapCard
                class="mb-2"
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
        subtitle: 'Получение',
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
