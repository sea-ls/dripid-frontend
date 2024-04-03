<template>
   <div class="about w-66 bg-indigo-accent-4 align-center d-flex flex-column position-relative">
     <h2 class='about-header'>О НАС</h2>
     <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum fugiat odit porro quos temporibus voluptas. Aliquam cumque doloremque earum ipsam officiis qui saepe similique tenetur, ut voluptatum. Reiciendis, veniam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut blanditiis consequuntur culpa dolor eligendi, eos ex in iusto laborum officiis quaerat quisquam reiciendis rem repellendus repudiandae veritatis vero voluptatum.</p>
   </div>
</template>

<script>
export default {
  name: "AppAboutWrapper"
}
</script>

<style scoped>
.about {
  height: 50vh;
  padding:  1rem 0;
  border-radius: 30px;
}
.about-header {
  font-size: 64px;
}
.about-text {
  padding: 0 8rem;
  font-size: 1.5rem;
}
</style>
