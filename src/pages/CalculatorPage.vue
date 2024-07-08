<template>
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
</template>

<script>
import {useDisplay} from "vuetify";

export default {
  name: "CalculatorPage",
  setup() {
    const {mobile} = useDisplay()

    return {
      mobile
    }
  }
}
</script>

<style scoped>
.field {
  width: 200px;
}
</style>
