<template>
  <v-container>
    <div class="lk d-flex justify-space-between">
      <div class="d-flex w-33 flex-column ga-10">
        <div class="lk__avatar"></div>
        <div class="lk__about d-flex ga-2 flex-column">
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">ИМЯ:</span>
            <div class="lk__about_row-text d-inline-block"></div>
          </div>
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">ФАМИЛИЯ:</span>
            <div class="lk__about_row-text d-inline-block"></div>
          </div>
          <div class="lk__about_row d-flex ga-1" >
            <span class="lk__about_row-title">АДРЕС:</span>
            <div class="lk__about_row-text d-inline-block"></div>
          </div>
        </div>
      </div>
      <div class="w-50 h-75 overflow-visible">
        <v-table>
          <thead>
          <tr>
            <th class="text-center">
              НОМЕР ЗАКАЗА
            </th>
            <th class="text-center">
              ОПИСАНИЕ ЗАКАЗА
            </th>
            <th class="text-center">
              ТРЕК НОМЕР
            </th>
            <th class="text-center">
              СТАТУС
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="item in orders"
              :key="item.id"
          >
            <td class="text-center">{{ item.id }}</td>
            <td class="text-center">{{ item.description }}</td>
            <td class="text-center">{{ item.track }}</td>
            <td class="text-center">
              <v-chip :color="item.color">
                {{item.status}}
              </v-chip>
            </td>
          </tr>
          </tbody>
        </v-table>
      </div>
    </div>
  </v-container>
</template>

<script>
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


    return {
      orders
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
