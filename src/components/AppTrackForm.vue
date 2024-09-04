<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
          v-model="trackingNumber"
          :rules="[rules.required]"
          label="Трек номер"
          required
      ></v-text-field>
    </v-form>
    <v-alert type="info" class="mt-4" color="#304FFE">
      При оформлении заказа необходимо указать адрес нашего склада.
    </v-alert>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const valid = ref(false);
    const trackingNumber = ref('');
    const rules = {
      required: (v) => !!v || 'Это поле обязательно',
    };

    const submit = () => {
      if (valid.value) {
        // Здесь можно добавить логику для обработки данных
        console.log('Трек номер:', trackingNumber.value);
        // Сбросить форму после успешной отправки
        resetForm();
      }
    };

    const resetForm = () => {
      trackingNumber.value = '';
      valid.value = false;
    };

    return {
      valid,
      trackingNumber,
      rules,
      submit,
    };
  },
};
</script>

<style scoped>
/* Добавьте свои стили, если необходимо */
</style>