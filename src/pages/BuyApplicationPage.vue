<template>
  <div>
    <v-container>
      <v-sheet class="d-flex flex-column ga-5">
        <h1>Заявка на выкуп-доставку товара</h1>
        <v-expansion-panels variant="accordion" multiple v-model="panels">
          <v-expansion-panel rounded="xl" value="type">
            <v-expansion-panel-title>
              <h4>Выберите тип доставки</h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-switch
                  color="#304FFE"
                  inset
                  v-model="withCard"
                  :label="withCard ? 'У меня есть зарубежная карта' : 'У меня нет зарубежной карты'"
              />
              <p class="text-black text-h5" v-if="!withCard">Если у вас нету зарубежной банковской карты, после заполнения формы заявки мы выкупим ваш товар и доставим его до вашего адреса в России или СНГ. Для выкупа товара и оплаты доставки поплните баланс</p>
              <p class="text-black text-h5" v-else>Если у вас есть зарубежная банковская карта, после заполнения формы мы выдадим вам адрес склада, который нужно указать при покупке товара. Адрес склада зависит от его страны которую вы выберите в заявке. После прибытия товара на склад, с вашего счета спишется цена доставки, убедитесь, что на вашем аккаунте пополнен баланс.</p>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel rounded="xl" value="info">
            <v-expansion-panel-title>
              <h4>Укажите информацию о товаре</h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-form>
                <v-text-field placeholder="Тип товара" label="Тип товара" color="#304FFE"
                              variant="outlined" rounded="xl" v-model="type"/>
                <v-text-field placeholder="Стоимость" label="Стоимость" color="#304FFE"
                              variant="outlined" rounded="xl" v-model="cost"/>
                <v-text-field placeholder="Кол-во" label="Кол-во" color="#304FFE"
                              variant="outlined" rounded="xl" v-model="count"/>
                <v-text-field placeholder="Ссылка на товар" label="Ссылка на товар" color="#304FFE"
                              variant="outlined" rounded="xl" v-model="link"/>
              </v-form>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel rounded="xl"  value="address">
            <v-expansion-panel-title>
              <h4>Укажите информацию о адресах доставки и складе</h4>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-form>
                <v-text-field placeholder="Фактический адрес доставки" label="Фактический адрес доставки"
                              color="#304FFE"
                              variant="outlined" rounded="xl" v-model="address"/>
                <v-autocomplete placeholder="Склад" label="Склад"
                                :items="warehouses"
                                :item-title="'name'"
                                return-object
                                auto-select-first
                                color="#304FFE"
                                v-model="warehouse"
                                :disabled="!withCard"
                                variant="outlined"
                                rounded="xl"
                >
                </v-autocomplete>
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
import {provide, ref} from "vue";
import {useOrdersStore} from "@/stores/orders";
import {useRouter} from "vue-router";

export default {
  name: "BuyApplicationPage",
  setup() {
    const type = ref('');
    const cost = ref(0);
    const address = ref('');
    const count = ref(1);
    const link = ref('');
    const warehouse = ref(null)

    const withCard = ref(false);
    const router = useRouter();

    const panels = ref(['type', 'info', 'address'])

    const warehouses = [
      {
        name: 'China',
        address: '980 Walsh Pines Suite 742,\n' +
            '\n' +
            '张丽娜 Tel:  13039789020;  13845658332\n' +
            '\n' +
            '164300 HEI LONG JIANG SHENG, HEI HE SHI, \n' +
            '\n' +
            'WANG SU JIE, SHUI AN HAO TING YI LOU KU FANG, \n' +
            '\n' +
            ' Zhang  Lina, Tel:  13039789020;  13845658332'
      },
      {
        name: 'USA',
        address: '5000 COUNTY ROAD \n 309A IGNACIO CO \n 81137-9177 USA',
      },
      {
        name: 'Europe',
        address: '643 Watsica Mountain Suite 170 \n '
      }
    ]

    function addApplication() {
      const store = useOrdersStore();
      store.addOrder(type.value, cost.value, address.value, count.value, link.value, warehouse.value, withCard.value)
      store.setWarehouse(warehouse)
      store.setIsWithCard(withCard)
      router.push({path: 'info'})
    }


    return {
      type,
      cost,
      address,
      count,
      link,
      withCard,
      panels,
      addApplication,
      warehouse,
      warehouses
    }
  }
}
</script>

<style scoped>

</style>
