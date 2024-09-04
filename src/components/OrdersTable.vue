<template>
  <v-container>
    <h2>Заказы пользователей</h2>
    <v-table :items="userOrders" :headers="userHeaders">
      <template v-slot:item.action="{ item }">
        <v-btn @click="openChat(item)">Обратиться в чат</v-btn>
      </template>
    </v-table>

    <h2>Заказы администраторов</h2>
    <v-table :items="adminOrders" :headers="adminHeaders">
      <template v-slot:item.status="{ item, index }">
        <v-select v-model="item.status" :items="statusOptions" @change="updateStatus(index, item.status)">
          <template v-slot:selection="{ item }">
            <v-chip :color="getChipColor(item)" dark>{{ item }}</v-chip>
          </template>
        </v-select>
      </template>
    </v-table>
  </v-container>
</template>

<script>
import { computed } from 'vue';
import { useOrderStore } from '@/stores/orderStore'; // Импортируем созданный store

export default {
  setup() {
    const orderStore = useOrderStore();

    // Моковые данные
    orderStore.orders = [
      {
        orderNumber: 1,
        productType: 'Товар A',
        quantity: 2,
        price: 100,
        currency: 'USD',
        trackingNumber: 'TRACK12345',
        status: 'В обработке',
      },
      {
        orderNumber: 2,
        productType: 'Товар B',
        quantity: 1,
        price: 200,
        currency: 'EUR',
        trackingNumber: 'TRACK67890',
        status: 'Выкуплен',
      },
      {
        orderNumber: 3,
        productType: 'Товар C',
        quantity: 3,
        price: 150,
        currency: 'GBP',
        trackingNumber: 'TRACK54321',
        status: 'Доставка по РФ',
      },
      {
        orderNumber: 4,
        productType: 'Товар D',
        quantity: 5,
        price: 50,
        currency: 'USD',
        trackingNumber: 'TRACK98765',
        status: 'Доставлено',
      },
      {
        orderNumber: 5,
        productType: 'Товар E',
        quantity: 4,
        price: 300,
        currency: 'EUR',
        trackingNumber: 'TRACK11223',
        status: 'Отменено',
      },
    ];

    const userHeaders = [
      { text: 'Номер заказа', value: 'orderNumber' },
      { text: 'Информация о товаре', value: 'productInfo' },
      { text: 'Трек номер', value: 'trackingNumber' },
      { text: 'Действие', value: 'action' },
    ];

    const adminHeaders = [
      { text: 'Номер заказа', value: 'orderNumber' },
      { text: 'Информация о товаре', value: 'productInfo' },
      { text: 'Трек номер', value: 'trackingNumber' },
      { text: 'Статус', value: 'status' },
    ];

    const statusOptions = [
      'В обработке',
      'Выкуплен',
      'Доставка по зарубежью',
      'Доставка по РФ',
      'Доставлено',
      'Отменено',
    ];

    const userOrders = computed(() => {
      return orderStore.orders.map((order) => ({
        orderNumber: order.orderNumber,
        productInfo: `${order.productType}, ${order.quantity} шт, ${order.price} ${order.currency}`,
        trackingNumber: order.trackingNumber,
      }));
    });

    const adminOrders = computed(() => {
      return orderStore.orders.map((order) => ({
        orderNumber: order.orderNumber,
        productInfo: `${order.productType}, ${order.quantity} шт, ${order.price} ${order.currency}`,
        trackingNumber: order.trackingNumber,
        status: order.status,
      }));
    });

    const openChat = (item) => {
      // Логика для открытия чата
      console.log(`Обратиться в чат по заказу ${item.orderNumber}`);
    };

    const updateStatus = (index, status) => {
      orderStore.updateOrderStatus(index, status);
    };

    const getChipColor = (status) => {
      switch (status) {
        case 'В обработке':
          return 'grey';
        case 'Выкуплен':
        case 'Доставка по зарубежью':
        case 'Доставка по РФ':
          return 'blue';
        case 'Доставлено':
          return 'green';
        case 'Отменено':
          return 'red';
        default:
          return 'grey';
      }
    };

    return {
      userOrders,
      adminOrders,
      userHeaders,
      adminHeaders,
      statusOptions,
      openChat,
      updateStatus,
      getChipColor,
    };
  },
};
</script>

<style scoped>
/* Добавьте свои стили, если необходимо */
</style>