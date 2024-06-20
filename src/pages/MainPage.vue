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
<!--    <v-carousel class="w-100 h-75" hide-delimiter-background>-->
<!--      <v-carousel-item cover rounded-->
<!--                       src="/carousel-1.jpg"-->
<!--      ></v-carousel-item>-->

<!--      <v-carousel-item-->
<!--          src="/carousel-2.jpg"-->
<!--      ></v-carousel-item>-->

<!--      <v-carousel-item-->
<!--          src="/carousel-3.jpg"-->
<!--      ></v-carousel-item>-->
<!--    </v-carousel>-->
    <div class="img d-flex justify-center align-center flex-column">
      <h2 class="img-title">DRIP ID!</h2>
      <p class="img-text">DRIP ID - Сервис достаок посылок из-за рубежа, с помощью которго вы сможете получать в РФ свои покупки из США, ЕС, Китая, Турции и ОАЭ</p>
    </div>
    <v-container>
      <div class="d-flex justify-center flex-column container-gap align-center">


<!--        <MainContentCanvas-->
<!--            text-top="DRIPID"-->
<!--            text-middle="DRIPID"-->
<!--            text-low="DRIPID"-->
<!--        >-->

<!--        </MainContentCanvas>-->

        <div class="roadmap d-flex justify-space-between w-66">
          <v-card width="300px" height="200px" rounded="xl" class="bg-indigo-accent-4" >
            <v-card-title class="bg-grey-lighten-3 w-50 card-title">ШАГ 1</v-card-title>
            <v-card-text>
              <h2 class="card-title ma-0">Регестрация</h2>
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

        <AppAboutWrapper>

        </AppAboutWrapper>

        <div class="d-flex justify-space-between  w-66">
          <AppCard></AppCard>
          <AppCard></AppCard>
          <AppCard></AppCard>
          <AppCard></AppCard>


        </div>

        <MainContentCanvas
            text-top="ТЕКСТ"
            text-middle="ТЕКСТ"
            text-low="ТЕКСТ"
            class="mb-4"
        >

        </MainContentCanvas>
        <div class="d-flex justify-center">
          <img alt="Контакты" src="../../public/contacts-mock.jpg">

        </div>



      </div>


    </v-container>


  </div>

</template>

<script>
import MainContentCanvas from "@/components/MainContentCanvas.vue";
import AppAboutWrapper from "@/components/AppAboutWrapper.vue";
import AppCard from "@/components/AppCard.vue";

export default {
  name: "MainPage",
  components: {AppCard, AppAboutWrapper, MainContentCanvas},
  setup() {

  }
}
</script>

<style scoped>
.card-title {
  margin: 20px;
  border-radius: 20px;
}
.roadmap {
  margin-top: 50px;
}
.container-gap {
  gap: 10vh;
}
.img-title {
  font-size: 100px;
  color: white;
  font-family: Kharkiv-Tone, sans-serif;
}
.img-text {
  font-size: 30px;
  color: white;
  width: 50vw;
  text-align: center;
}
.img {
  background-image: url("/main-page.jpg");
  background-size: cover;
  width: 100%;
  height: 95vh;
}
.main {
  overflow-y: scroll;
}
</style>
