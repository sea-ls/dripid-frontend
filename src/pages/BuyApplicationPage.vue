<template>
  <div>
    <v-container>
      <v-form>
        <v-text-field placeholder="Тип товара" label="Тип товара"   v-model="type"/>
        <v-text-field placeholder="Стоимость" label="Стоимость" v-model="cost"/>
        <v-text-field placeholder="Фактический адрес доставки" label="Фактический адрес доставки" v-model="address"/>
        <v-text-field placeholder="Кол-во" label="Кол-во" v-model="count"/>
        <v-text-field placeholder="Ссылка на товар" label="Ссылка на товар" v-model="link"/>
        <v-btn color="primary" @click="addApplication">Оставить заявку</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import {ref} from "vue";
import {useOrdersStore} from "@/stores/orders";
import {useRouter} from "vue-router";

export default {
  name: "BuyApplicationPage",
  setup() {
    const type = ref('');
    const cost = ref(0);
    const address = ref('');
    const count = ref(0);
    const link = ref('')

    const router = useRouter()

    function addApplication() {
      const store = useOrdersStore();
      store.addOrder(type.value, cost.value, address.value, count.value, link.value)
      router.push({path: 'orders/user'})
    }

    return {
      type,
      cost,
      address,
      count,
      link,
      addApplication
    }
  }
}
</script>

<style scoped>

</style>
