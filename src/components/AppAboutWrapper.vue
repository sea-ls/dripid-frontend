<template>
  <!--   <div class="about bg-indigo-accent-4 align-center d-flex flex-column position-relative ">-->
  <!--     <h2 class='about-header'>О НАС</h2>-->
  <!--   </div>-->
  <v-card class="about bg-indigo-accent-4 d-flex flex-column align-center justify-center position-relative w-100">
    <v-card-title>
      <h2 class='about-header'>О НАС</h2>
    </v-card-title>
      <p class="about-text text-body-1 text-md-h4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum fugiat odit porro quos temporibus voluptas. Aliquam cumque doloremque earum ipsam officiis qui saepe similique tenetur, ut voluptatum. Reiciendis, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut blanditiis consequuntur culpa dolor eligendi, eos ex in iusto laborum officiis quaerat quisquam reiciendis rem repellendus repudiandae veritatis vero voluptatum.</p>
  </v-card>
</template>

<script>
export default {
  name: "AppAboutWrapper"
}
</script>

<style scoped>
.about {
  box-sizing: content-box;
  padding: 1rem 0;
  border-radius: 30px;
  height: 80vh;
  padding: 40px;
}

.about-header {
  font-size: 3rem;
  font-family: Kharkiv-Tone, sans-serif;
}

.about-text {
  font-size: 1.2rem;
  text-align: center;
}
</style>
