<template>
  <v-footer class="footer bg-indigo-accent-4 pa-0" rounded="xl">

    <v-container class="pa-0 d-flex flex-column h-100">
      <v-row class="border-b-md border-white ma-0 justify-self-start flex-0-1">
          <v-col class="pa-5">
            <h2>
              DRIP ID
            </h2>
          </v-col>
          
        </v-row>
      

      <v-row class="ma-0">
        <v-col class="border-e-md border-white d-flex pa-10">
          <v-row>
            <v-col>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum veritatis.
              </div>
            </v-col>
            <v-col>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione provident expedita necessitatibus illo, quam nesciunt cupiditate eaque laborum cumque quis ipsa ad enim veritatis voluptatem, natus nam corporis. Perspiciatis, deleniti!
              </div>
              <div>
                {{ new Date().getFullYear() }} — <strong>drip id</strong>
              </div>
            </v-col>
          </v-row>
        </v-col>
        
        <v-col class="align-self-end pa-10">
          <v-row>
            <v-col class="contacts d-flex">
              <div class="d-flex flex-column justify-space-between ">
                  <a class="link" href="#">Telegram</a>
                  <a class="link" href="#">VK</a>
                  <a class="link" href="#">INSTAGRAM</a>
              </div>
            </v-col>
            <v-col>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum veritatis.
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped lang="scss">
.footer {
  font-size: 1.2rem;
}
h2 {
  font-size: 20rem;
  font-weight: 400;
  line-height: 1;
  font-family: Kharkiv-Tone, sans-serif;
}
.border-white {
  border-color: white !important; 
}
.link {
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
.contacts {
  flex-grow: 0.5;
}
</style>
