<template>

  <div>
<!--    <v-bottom-sheet inset location="left bottom">-->
<!--      <template v-slot:activator="{ props }">-->
<!--        <v-btn v-bind="props" text="Появились вопросы?"></v-btn>-->
<!--      </template>-->
<!--      <v-list lines="two">-->
<!--        <v-list-item-->
<!--            v-for="n in 3"-->
<!--            :key="n"-->
<!--            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"-->
<!--        >-->
<!--          <template v-slot:title>-->
<!--            <div class="bg-indigo-accent-4 rounded">Это безопасно?</div>-->
<!--          </template>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-bottom-sheet>-->

    <v-navigation-drawer v-if="mobile" v-model="drawer" class="position-fixed">
      <v-list-item>Как это работает?</v-list-item>
      <v-list-item>Бренды</v-list-item>
      <v-list-item>Помощь</v-list-item>
      <v-list-item>Вопросы</v-list-item>
    </v-navigation-drawer>





    <div class="img d-flex justify-center align-center flex-column ">
      <h2 class="img-title">DRIP ID!</h2>
      <p class="img-text">DRIP ID - Сервис достаок посылок из-за рубежа, с помощью которго вы сможете получать в РФ свои покупки из США, ЕС, Китая, Турции и ОАЭ</p>
    </div>
    <v-container>
      <div class="d-flex justify-center flex-column container-gap align-center">


        <MainContentCanvas
            text-top="DRIPID"
            text-middle="DRIPID"
            text-low="DRIPID"
        >

        </MainContentCanvas>

        <div class="w-100">
          <h2 class="roadmap-title">Как заказать доставку?</h2>
          <div class="roadmap d-flex justify-space-between align-center w-100 ga-2 flex-column flex-md-row" >
            <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4" >
              <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 1</v-card-title>
              <v-card-text>
                <h2 class="card-title ma-0">Регистрация</h2>
                <p class="card-text">Зарегестрируйтесь на сервисе DRIPID и получите персональный адрес</p>
              </v-card-text>
            </v-card>
            <v-card width="300px" height="200px" rounded="xl" class="bg-grey-lighten-3">
              <v-card-title class="w-50 bg-indigo-accent-4 card-title" >ШАГ 2</v-card-title>
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
        </div>




        <AppAboutWrapper>

        </AppAboutWrapper>

        <div class="d-flex justify-space-between align-center w-100 ga-2 flex-column flex-md-row">

          <v-carousel class="carousel" hide-delimiter-background v-if="mobile">
            <v-carousel-item cover rounded
            >
              <AppCard></AppCard>
            </v-carousel-item>

            <v-carousel-item

            >
              <AppCard></AppCard>

            </v-carousel-item>

            <v-carousel-item
            >
              <AppCard></AppCard>
            </v-carousel-item>
            <v-carousel-item
            >
              <AppCard></AppCard>
            </v-carousel-item>
          </v-carousel>

          <div v-else class="d-flex w-100 justify-space-around align-center">
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
          </div>


        </div>


        <v-card :width="mobile ? '100%' : '600px'"  height="300px" class="bg-grey-lighten-3 pa-10" :rounded="'xl'" title="Расчет стоимости" >
          <template #text>
            <v-text-field placeholder="Страна, город" color="primary" variant="outlined"></v-text-field >
            <div class="d-flex justify-space-between">
              <div class="field">
                <v-text-field color="primary" variant="outlined" placeholder="Вес"></v-text-field>
              </div>
              <div class="field">
                <v-text-field color="primary" variant="outlined" placeholder="Стоимость"></v-text-field>
              </div>
            </div>
          </template>
        </v-card>



      </div>


    </v-container>

    <AppFooter></AppFooter>



  </div>

</template>

<script>
import MainContentCanvas from "@/components/MainContentCanvas.vue";
import AppAboutWrapper from "@/components/AppAboutWrapper.vue";
import AppCard from "@/components/AppCard.vue";
import AppFooter from "@/components/AppFooter.vue";
import {useDisplay} from "vuetify";
import {inject} from "vue";

export default {
  name: "MainPage",
  components: {AppFooter, AppCard, AppAboutWrapper, MainContentCanvas},
  setup() {
    const {mobile} = useDisplay();
    const drawer = inject('drawer')

    return {
      mobile,
      drawer
    }

  }
}
</script>

<style scoped lang="scss">
.card-title {
  margin: 20px;
  border-radius: 20px;
}
.roadmap {
  margin-top: 50px;
  &-title {
    font-size: 4rem;
    text-align: center;
    color: #304FFE;
  }
}
.container-gap {
  gap: 10vh;
}
.img-title {
  font-size: 50px;
  color: #304FFE;
  font-family: Kharkiv-Tone, sans-serif;
}
.img-text {
  font-size: 20px;
  color: white;
  width: 50vw;
  text-align: center;
}
.img {
  background-image: url("/main-page.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 95vh;
}
.main {
  overflow-y: scroll;
}
.carousel {
  width: 350px;
  height: 400px;
}
.field {
  width: 200px;
}
</style>
