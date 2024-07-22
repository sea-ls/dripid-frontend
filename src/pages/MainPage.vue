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
      <v-list-item @click="navigateTo('#roadmap')">Как это работает?</v-list-item>
      <v-list-item>Бренды</v-list-item>
      <v-list-item @click="navigateTo('#about')">О нас</v-list-item>
      <v-list-item @click="navigateTo('#questions')">Вопросы</v-list-item>
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

        <div class="w-100" id="roadmap">
          <AppRoadmap></AppRoadmap>
        </div>


        <div class="w-100">
          <h1 class="title d-flex text-center justify-center">ГДЕ МОЙ ДРИП БОКС?</h1>
          <v-text-field placeholder="Номер отслежевания" rounded="xl" color="#304FFE" variant="outlined">
            <template #append v-if="!mobile">
              <v-btn color="#304FFE" rounded="xl">Отследить посылку</v-btn>
            </template>
          </v-text-field>
        </div>



          <AppAboutWrapper id="about">

          </AppAboutWrapper>


        <div class="d-flex justify-space-between align-center w-100 ga-2 flex-column flex-md-row">

          <v-carousel class="carousel d-flex align-center justify-cente" hide-delimiter-background v-if="mobile" :show-arrows="false" >
            <v-carousel-item cover rounded
            >
              <v-dialog class="d-flex justify-center align-center" close-on-back>
                <template #activator="{ props: activatorProps }">
                  <AppCard
                      v-bind="activatorProps"
                  ></AppCard>
                </template>
                <template v-slot:default="{ isActive }">
                  <div class="d-flex justify-center align-center">
                    <v-carousel class="carousel" hide-delimiter-background>
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
                  </div>

                </template>
              </v-dialog>
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
            <v-dialog class="d-flex justify-center align-center" close-on-back>
              <template #activator="{ props: activatorProps }">
                <AppCard
                    v-bind="activatorProps"
                ></AppCard>
              </template>
              <template v-slot:default="{ isActive }">
                <div class="d-flex justify-center align-center">
                  <v-carousel class="carousel" hide-delimiter-background>
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
                </div>

              </template>
            </v-dialog>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
          </div>


        </div>


        <v-card width="100%"  height="400px" class="bg-grey-lighten-3 pa-10" :rounded="'xl'" title="Расчет стоимости" >
          <template #text class="w-33">
            <v-select clearable variant="outlined" :items="['Китай', 'США', 'Германия']" label="Откуда" color="primary"></v-select>
            <v-text-field placeholder="Страна, город" color="primary" variant="outlined"></v-text-field >
            <div class="d-flex justify-space-between">
              <div class="field">
                <v-text-field color="primary" variant="outlined" placeholder="Вес" v-model="range[1]" type="number"></v-text-field>
              </div>
              <div class="field">
                <v-text-field color="primary" variant="outlined" placeholder="Стоимость"></v-text-field>
              </div>
            </div>
            <v-range-slider color="primary" :min="0" :max="20" :step="1" v-model="range" thumb-label></v-range-slider>
          </template>
        </v-card>

        <AppFooter id="questions"></AppFooter>


      </div>


    </v-container>




  </div>

</template>

<script>
import MainContentCanvas from "@/components/MainContentCanvas.vue";
import AppAboutWrapper from "@/components/AppAboutWrapper.vue";
import AppCard from "@/components/AppCard.vue";
import AppFooter from "@/components/AppFooter.vue";
import {useDisplay, useGoTo} from "vuetify";
import {inject, provide, ref} from "vue";
import AppRoadmap from "@/components/AppRoadmap.vue";

export default {
  name: "MainPage",
  components: {AppRoadmap, AppFooter, AppCard, AppAboutWrapper, MainContentCanvas},
  setup() {
    const {mobile} = useDisplay();
    const drawer = inject('drawer');
    const range = ref([0, 20]);

    const goTo = useGoTo();
    const navigateTo = (selector) => {
      goTo(selector)
    }

    return {
      mobile,
      drawer,
      range,
      navigateTo
    }

  }
}
</script>

<style scoped lang="scss">
.container {
  max-width: 100vw;
  padding: 4rem;
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
.title {
  font-family: Kharkiv-Tone, sans-serif;
  color: #304FFE;
}

</style>
