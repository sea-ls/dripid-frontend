<template>
  <div class="personal-page">
    <div>

      <div class="lk d-flex flex-column justify-space-between">
        <div class="d-flex w-100 ga-10 justify-space-around flex-column align-center">
          <v-avatar color="surface-variant"size="150">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-avatar>
          <div class="lk__about d-flex w-100 ga-2 flex-column">
            <div class="lk__about_ro d-flex ga-1">
              <span class="lk__about_row-title">ИМЯ:</span>
              <div class="lk__about_row-text d-inline-block text-white">Имя</div>
            </div>
            <div class="lk__about_row d-flex ga-1">
              <span class="lk__about_row-title">ФАМИЛИЯ:</span>
              <div class="lk__about_row-text d-inline-block text-white">Фамилия</div>
            </div>
            <div class="lk__about_row d-flex ga-1">
              <span class="lk__about_row-title">АДРЕС:</span>
              <div class="lk__about_row-text d-inline-block text-white"></div>
            </div>
            <div class="lk__about_row d-flex ga-1">
              <span class="lk__about_row-title">EMAIL:</span>
              <div class="lk__about_row-text d-inline-block text-white"></div>
            </div>
            <div class="lk__about_row d-flex ga-1">
              <span class="lk__about_row-title">ТЕЛЕФОН:</span>
              <div class="lk__about_row-text d-inline-block text-white"></div>
            </div>
            <v-divider></v-divider>
            <div class="lk__about_row d-flex ga-1 flex-column">
              <span class="lk__about_row-title">Баланс:</span>
              <div class="lk__about_row-text d-inline-block text-white">0.00 Р</div>
              <span class="lk__about_row-title">Пополнить <v-icon icon="mdi-plus" color="primary"></v-icon></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalPage"
}
</script>

<style scoped>
.lk__avatar {
  width: 200px;
  height: 200px;
  background-color: gray;
  border-radius: 20px;
}

.lk__about_row-title {
  color: #304FFE;
}

.lk__about_row-text {
  width: 100%;
  background-color: gray;
  border-radius: 10px;
}
</style>
