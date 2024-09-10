<template>
	<v-list color="gray" class="bg-grey-lighten-4 pa-5" rounded="xl">
		<v-list-item
			prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
			subtitle="Баланс 0.00 ₽"
			:title="accountInfo.firstName + ' ' + accountInfo.lastName"
			@click="$router.push('/lk/personal')"
		>
		</v-list-item>
		<div class="buttons position-relative" v-if="!isAdmin">
			<v-btn @click.stop="$router.push('/lk/buy')" class="mr-3" variant="text">Заявка на выкуп</v-btn>
			<v-btn @click.stop="$router.push('/lk/wait')" variant="text">Добавить ожидаемую посылку</v-btn>
		</div>
		<v-list-item class="link" rounded="xl" v-if="!isAdmin">
			<v-list-item-title @click="$router.push('/lk/orders/user')">Заказы</v-list-item-title>
		</v-list-item>
		<v-divider />
		<v-list-item class="link" rounded="xl" v-if="!isAdmin">
			<v-list-item-title @click="$router.push('/lk/wait')">Ожидание посылки</v-list-item-title>
		</v-list-item>
		<v-divider />
		<v-list-item class="link" rounded="xl" v-if="!isAdmin">
			<v-list-item-title @click="$router.push('/lk/calc')">Калькулятор стоимости</v-list-item-title>
		</v-list-item>
		<v-divider />

		<v-list-item class="link" rounded="xl" v-if="!isAdmin">
			<v-list-item-title @click="$router.push('/lk/track')">Трек номер</v-list-item-title>
		</v-list-item>

		<v-divider />
		<v-list-item class="link" rounded="xl" v-if="isAdmin">
			<v-list-item-title @click="$router.push('/lk/orders/admin')">Администратор</v-list-item-title>
		</v-list-item>
    <v-divider />
    <v-list-item class="link" rounded="xl" v-if="isAdmin">
      <v-list-item-title @click="$router.push('/lk/orders/admin')">Чаты</v-list-item-title>
    </v-list-item>
	</v-list>
</template>

<script>
import {useUserStore} from "@/stores/user";

export default {
	name: 'MenuPage',
	setup() {
    const {accountInfo, isAdmin} = useUserStore();
    console.log(accountInfo)


    return {
      accountInfo,
      isAdmin
    }
  },
}
</script>

<style lang="scss" scoped>
.link:hover {
	background: #304ffe;
	cursor: pointer;
}
.buttons {
	top: -42px;
	left: 190px;
	width: fit-content;
	margin-bottom: -36px;
	button:hover {
		background-color: rgba($color: #1867c0, $alpha: 0.1);
		color: #1867c0;
	}
}
</style>
