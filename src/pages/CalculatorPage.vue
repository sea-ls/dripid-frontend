<template>
  <v-card :width="mobile ? '100%' : '600px'"  height="400px" class="bg-grey-lighten-3 pa-10" :rounded="'xl'" title="Расчет стоимости" >
    <template #text>
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
</template>

<script>
import {useDisplay} from "vuetify";
import {ref} from "vue";

export default {
  name: "CalculatorPage",
  setup() {
    const {mobile} = useDisplay()
    const range = ref([0, 20])


    return {
      mobile,
      range
    }
  }
}
</script>

<style scoped>
.field {
  width: 200px;
}
</style>
