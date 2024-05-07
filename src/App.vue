<template>
  <v-app>
    <v-layout>

      <AppHeader @openClick="drawer = false" @closeMenu="drawer = true"></AppHeader>

      <v-main>
        <v-navigation-drawer location="right" v-model="drawer">
          <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
          <v-divider></v-divider>
          <v-list-item link title="List Item 1"></v-list-item>
          <v-list-item link title="List Item 2"></v-list-item>
          <v-list-item link title="List Item 3"></v-list-item>
        </v-navigation-drawer>
        <v-container>
          <div class="d-flex justify-center flex-column container-gap align-center">
            <v-carousel class="w-66" hide-delimiter-background>
              <v-carousel-item cover rounded
                               src="/carousel-1.jpg"
              ></v-carousel-item>

              <v-carousel-item
                  src="/carousel-2.jpg"
              ></v-carousel-item>

              <v-carousel-item
                  src="/carousel-3.jpg"
              ></v-carousel-item>
            </v-carousel>

            <MainContentCanvas
                text-top="DRIPID"
                text-middle="DRIPID"
                text-low="DRIPID"
            >

            </MainContentCanvas>

            <AppAboutWrapper>

            </AppAboutWrapper>

            <div class="d-flex justify-space-between w-66">
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


          </div>


        </v-container>
        <AppFooter></AppFooter>


      </v-main>

    </v-layout>

    <!--    <v-main>-->
    <!--    </v-main>-->

  </v-app>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import MainContentCanvas from "@/components/MainContentCanvas.vue";
import AppAboutWrapper from "@/components/AppAboutWrapper.vue";
import AppCard from "@/components/AppCard.vue";
import AppFooter from "@/components/AppFooter.vue";
import {ref} from "vue";
import Keycloak from "keycloak-js";

const drawer = ref(false)

fetch('http://212.233.73.223:8080/api/delivery-service/person/authenticated', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ2ZTJPSWlEQzkwLXVvejMtVVVIZDBGeE5Oa1liZDZJbnBpSkloOGVRT25vIn0.eyJleHAiOjE3MTUxMTkzOTAsImlhdCI6MTcxNTExNzU5MCwiYXV0aF90aW1lIjoxNzE1MTE2Nzg3LCJqdGkiOiJiNGM2YjI0MS02NzI0LTRmNGEtOWQ2Ni04NzM3YTgyZGY2NTciLCJpc3MiOiJodHRwOi8vMjEyLjIzMy43My4yMjM6OTAwMC9yZWFsbXMvZHJpcElkIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImM1YTljMTY5LTAyYzktNGQ1Ni05YzcwLTQxM2U2ODg2MTAxNSIsInR5cCI6IkJlYXJlciIsImF6cCI6InBicGtjZV9jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiZGEyNTVjOTItZjliYi00NzkwLWIwNjctZDQ1MGQ3YWUyYWQzIiwiYWNyIjoiMCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLWRyaXBpZCIsIlNVUEVSQURNSU4iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiQURNSU4iLCJVU0VSIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCBhdXRoLnJlYWQgZGVsaXZlcnkucmVhZCIsInNpZCI6ImRhMjU1YzkyLWY5YmItNDc5MC1iMDY3LWQ0NTBkN2FlMmFkMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoi0J3QuNC60LjRgtCwINCd0LjQutC40YLQsCIsInByZWZlcnJlZF91c2VybmFtZSI6InJlYWxjYXlsLmNsQGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiLQndC40LrQuNGC0LAiLCJmYW1pbHlfbmFtZSI6ItCd0LjQutC40YLQsCIsImVtYWlsIjoicmVhbGNheWwuY2xAZ21haWwuY29tIn0.cFSsxeoZPYZ6cI17EGaoc74TeFee7D18vcxNPC-9UK27V-CyWycf3sClavPYwm2IB2daoc09TEVhOFULiqcJs9wLFtde6G9JruICHlZb1copUSENYdwSW909-rpbzJBTvU8KFhiUWt0IUMMZxYIDoxlKciZ7hEPQDq4xo4-YHKQGqVQ29zh0TLSIEoMwK-_bMa9E0p_T_F9-lDRal64JKEGA316YxxjDo9QHo9PiHVIgFbJdilm72gs2yf3XB-F_D_eclzk0I4O9ORpapeNi0hs4S4SVfONKwBox2cT6SCfVBmbxY_i6MGT4044X4t_CH7eoYWEgIgGoDETcbtKbwQ`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
})
    .then((response) => {
      console.log(response)
    })

// const keycloak = new Keycloak({
//   url: 'http://212.233.73.223:9000/realms/dripId/protocol/openid-connect/auth',
//   realm: 'dripId',
//   clientId: 'pbpkce_client'
// });
//
// try {
//   const authenticated = await keycloak.init({
//     checkLoginIframe: false,
//     flow: 'standard',
//     onLoad: 'check-sso',
//   });
//   console.log(authenticated)
//   console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
// } catch (e) {
//   console.error(e)
// }


</script>

<style>
@font-face {
  font-family: 'Kharkiv-Tone';
  src: url("@/assets/fonts/Kharkiv Tone 04.10.2020.ttf");
}

* {
  font-family: Kharkiv-Tone, sans-serif;
}

.container-gap {
  gap: 10vh;
}
</style>
