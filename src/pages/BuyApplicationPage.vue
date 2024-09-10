<template>
  <div>
    <v-container>
      <v-sheet class="d-flex flex-column ga-5">
        <h1>Заявка на выкуп-доставку товара</h1>
        <v-expansion-panels variant="accordion" multiple v-model="panels">
          <v-expansion-panel rounded="xl" value="info">
            <v-expansion-panel-title>
              <h4>Укажите информацию о товаре</h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <AddProductForm @add="addProduct($event)"></AddProductForm>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel rounded="xl" value="address">
            <v-expansion-panel-title>
              <h4>Укажите информацию о адресах доставки и складе</h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-form>
                <v-select
                    placeholder="Фактический адрес доставки"
                    label="Фактический адрес доставки"
                    color="#304FFE"
                    variant="outlined"
                    rounded="xl"
                    :items="addresses"
                    item-value="id"
                    item-title="address"
                    v-model="currentAddressId"
                />
              </v-form>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-btn color="primary" @click="addApplication">Оставить заявку</v-btn>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import AddProductForm from "@/components/AddProductForm.vue";
import {useAddressStore} from "@/stores/address";
import {ordersService} from "@/api/sevices/ordersService";

export default {
  name: 'BuyApplicationPage',
  components: {AddProductForm},
  setup() {
    const type = ref('DELIVERY');
    const address = ref('');
    const link = ref('');
    const warehouse = ref(null);
    const withCard = ref(false);
    const router = useRouter();
    const panels = ref(['type', 'info', 'address']);
    const addressStore = useAddressStore();
    const addresses = ref([]);
    const service = ordersService();
    const currentAddressId = ref('');
    const products = ref([]);

    addressStore.getAddresses().then(() => {
      addresses.value = addressStore.addresses;
    })

    function addProduct(product) {
      products.value.push(product);
    }

    function addApplication() {
      service.saveOrderByUser({
        orderType: type.value,
        products: products.value,
        warehouseId: 1,
        addressId: currentAddressId.value
      }).then(() => router.push({path: 'info'}))
    }

    return {
      type,
      address,
      link,
      withCard,
      panels,
      addApplication,
      warehouse,
      addProduct,
      addresses,
      currentAddressId
    }
  },
}
</script>

<style scoped></style>
