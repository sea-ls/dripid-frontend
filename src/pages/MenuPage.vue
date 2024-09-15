<template>
	<v-list color="gray" class="bg-grey-lighten-4 pa-5" rounded="xl">
		<v-list-item
			v-bind="props"
			prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
			class="py-2 d-flex"
			@click="$router.push('/lk/personal')"
		>
			<div class="float-left">
				<v-list-item-title>
					{{ store.fullName }}
				</v-list-item-title>
				<v-list-item-subtitle>Баланс 0.00 ₽</v-list-item-subtitle>
			</div>
			<div class="buttons float-left ml-5" v-if="!store.isAdmin">
				<v-tooltip location="bottom" text="Подсказка 1">
					<template v-slot:activator="{ props }">
						<v-btn v-bind="props" @click.stop="$router.push('/lk/buy')" class="mr-3" variant="text">
							Заявка на выкуп
						</v-btn>
					</template>
				</v-tooltip>
				<v-tooltip location="bottom" text="Подсказка 2">
					<template v-slot:activator="{ props }">
						<v-btn v-bind="props" @click.stop="$router.push('/lk/wait')" variant="text">
							Добавить ожидаемую посылку
						</v-btn>
					</template>
				</v-tooltip>
			</div>
		</v-list-item>

		<v-tooltip location="bottom" text="Подсказка 3">
			<template v-slot:activator="{ props }">
				<v-list-item
					class="link"
					rounded="xl"
					v-if="!store.isAdmin"
					v-bind="props"
					@click="$router.push('/lk/orders/user')"
				>
					<v-list-item-title>Заказы</v-list-item-title>
				</v-list-item>
			</template>
		</v-tooltip>
		<v-divider />
		<v-tooltip location="bottom" text="Подсказка 4">
			<template v-slot:activator="{ props }">
				<v-list-item
					class="link"
					rounded="xl"
					v-if="!store.isAdmin"
					v-bind="props"
					@click="$router.push('/lk/wait')"
				>
					<v-list-item-title>Ожидание посылки</v-list-item-title>
				</v-list-item>
			</template>
		</v-tooltip>
		<v-divider />
		<v-tooltip location="bottom" text="Подсказка 5">
			<template v-slot:activator="{ props }">
				<v-list-item
					class="link"
					rounded="xl"
					v-if="!store.isAdmin"
					v-bind="props"
					@click="$router.push('/lk/calc')"
				>
					<v-list-item-title>Калькулятор стоимости</v-list-item-title>
				</v-list-item>
			</template>
		</v-tooltip>
		<v-divider />

		<v-tooltip location="bottom" text="Подсказка 6">
			<template v-slot:activator="{ props }">
				<v-list-item
					class="link"
					rounded="xl"
					v-if="!store.isAdmin"
					v-bind="props"
					@click="$router.push('/lk/track')"
				>
					<v-list-item-title>Трек номер</v-list-item-title>
				</v-list-item>
			</template>
		</v-tooltip>

		<v-divider />
		<v-tooltip location="bottom" text="Подсказка 7">
			<template v-slot:activator="{ props }">
				<v-list-item
					class="link"
					rounded="xl"
					v-if="store.isAdmin"
					v-bind="props"
					@click="$router.push('/lk/orders/admin')"
				>
					<v-list-item-title>Администратор</v-list-item-title>
				</v-list-item>
			</template>
		</v-tooltip>
		<v-divider />
		<v-tooltip location="bottom" text="Подсказка 8">
			<template v-slot:activator="{ props }">
				<v-list-item class="link" rounded="xl" v-if="store.isAdmin" @click="$router.push('/lk/orders/admin')">
					<v-list-item-title v-bind="props">Чаты</v-list-item-title>
				</v-list-item>
			</template>
		</v-tooltip>
	</v-list>
</template>

<script>
import { useUserStore } from '@/stores/user'

export default {
	name: 'MenuPage',
	setup() {
		const store = useUserStore()

		return {
			store,
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
	margin-top: 2px;
	button:hover {
		background-color: rgba($color: #1867c0, $alpha: 0.1);
		color: #1867c0;
	}
}
</style>
