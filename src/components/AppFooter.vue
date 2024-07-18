<template>
  <v-footer class="footer bg-indigo-accent-4 w-100 h-100 d-flex justify-center flex-column" rounded="xl">
    <h2>
      DRIP ID
    </h2>

    <div class="d-flex">
      <div class="contacts w-50 d-flex flex-column">
        <a>Telegram</a>
        <a>VK</a>
        <a>INSTAGRAM</a>
      </div>
      <div class="pt-0 w-50">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto consequatur consequuntur cumque cupiditate, dolore in, maxime perspiciatis provident quod reiciendis, reprehenderit sapiente suscipit ullam voluptas. Aperiam officia rerum veritatis.
      </div>

    </div>


    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>drip id</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 90vh !important;
}
h2 {
  font-size: 3rem;
  font-family: Kharkiv-Tone, sans-serif;
}
</style>
