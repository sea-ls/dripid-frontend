<template>
  <v-container>
    <div class="lk d-flex flex-column justify-space-between">
      <div class="d-flex w-100 ga-10 justify-space-around">
        <div class="lk__avatar"></div>
        <div class="lk__about d-flex w-100 ga-2 flex-column">
          <div class="lk__about_ro d-flex ga-1" >
            <span class="lk__about_row-title">ИМЯ:</span>
            <div class="lk__about_row-text d-inline-block text-white">{{accountInfo.firstName}}</div>
          </div>
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">ФАМИЛИЯ:</span>
            <div class="lk__about_row-text d-inline-block text-white">{{accountInfo.lastName}}</div>
          </div>
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">АДРЕС:</span>
            <div class="lk__about_row-text d-inline-block text-white"></div>
          </div>
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">EMAIL:</span>
            <div class="lk__about_row-text d-inline-block text-white">{{accountInfo.email}}</div>
          </div>
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">ТЕЛЕФОН:</span>
            <div class="lk__about_row-text d-inline-block text-white">{{accountInfo.phone}}</div>
          </div>
        </div>
      </div>
      <div class="w-100 overflow-visible">
        <v-data-table-virtual
          :headers="headers"
          :items="orders"
          height="600px"
        >
          <template v-slot:item.status="{item}">
            <v-chip :color="item.color">
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table-virtual>
      </div>
    </div>
  </v-container>
</template>

<script>
import {da} from "vuetify/locale";
import {ref} from "vue";

export default {
  name: "PersonalAreaPAge",
  setup() {
    const orders = [
      {id: 1, description: 'Nike AIR MAX 95', track: '', status: 'В обработке', color: 'gray'},
      {id: 2, description: 'Adidas Color sweatshirt', track: '', status: 'В обработке', color: 'gray'},
      {id: 3, description: 'Louis bag', track: 'E12MW459678', status: 'В Пути', color: '#304FFE'},
      {id: 4, description: 'AIRMAX 95', track: 'E12MW459462', status: 'Доставлен', color: 'green'},
      {id: 5, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 6, description: 'AIRMAX 95', track: 'E12MW45923', status: 'Отменен', color: 'red'},
      {id: 7, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 8, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 9, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 10, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 11, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 12, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 13, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 15, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
      {id: 16, description: 'AIRMAX 95', track: 'E12MW45921231', status: 'Доставлен', color: 'green'},
    ]

    const headers = [
      {
        title: 'НОМЕР ЗАКАЗА',
        key: 'id'
      },
      {
        title: 'ОПИСАНИЕ',
        key: 'description'
      },
      {
        title: 'ТРЕК НОМЕР',
        key: 'track'
      },
      {
        title: 'СТАТУС',
        key: 'status'
      },
    ]

    const accountInfo = ref({})

    fetch('http://212.233.73.223:8080/api/delivery-service/person/authenticated', {
      method: 'GET',
      headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    }).then(res =>  res.json()).then((data) => accountInfo.value = data.accountInfo)


    return {
      orders,
      headers,
      accountInfo
    }
  }
}
</script>

<style scoped lang="scss">
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
