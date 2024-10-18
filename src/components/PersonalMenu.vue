<template>
	<v-list color="gray" class="bg-grey-lighten-4 pa-5 h-100" rounded="xl">
		<v-list-item class="py-2 d-flex" @click="$router.push('/lk/personal')">
			<template #prepend>
				<v-avatar :size="64">
					<v-img alt="Аватар" src="https://randomuser.me/api/portraits/men/85.jpg" />
				</v-avatar>
			</template>
			<div class="float-left">
				<v-list-item-title class="name">
					{{ fullName }}
				</v-list-item-title>
				<v-list-item-subtitle>Баланс 0.00 ₽</v-list-item-subtitle>
			</div>

			<!-- <div class="buttons float-left ml-5" v-if="!isAdmin">
				<v-tooltip location="bottom" text="Подсказка 1">
					<template #activator="{ props }">
						<v-btn v-bind="props" @click.stop="$router.push('/lk/buy')" class="mr-3" variant="text">
							Заявка на выкуп
						</v-btn>
					</template>
				</v-tooltip>
				<v-tooltip location="bottom" text="Подсказка 2">
					<template #activator="{ props }">
						<v-btn v-bind="props" @click.stop="$router.push('/lk/wait')" variant="text">
							Добавить ожидаемую посылку
						</v-btn>
					</template>
				</v-tooltip>
			</div> -->
		</v-list-item>
		<template v-if="!isAdmin">
			<v-tooltip location="bottom" text="Подсказка 3">
				<template #activator="{ props }">
					<router-link to="/lk/buy">
						<v-list-item class="link" rounded="xl" v-bind="props">
							<v-list-item-title>Заявка на выкуп</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
			<v-divider class="my-1" />
			<!-- <v-tooltip location="bottom" text="Подсказка 3">
				<template #activator="{ props }">
					<v-list-item class="link" rounded="xl" v-bind="props">
						<router-link to="/lk/orders/user">
							<v-list-item-title>Добавить ожидаемую посылку</v-list-item-title>
						</router-link>
					</v-list-item>
				</template>
			</v-tooltip>
			<v-divider class="my-1" /> -->
			<v-tooltip location="bottom" text="Подсказка 3">
				<template #activator="{ props }">
					<router-link to="/lk/orders/user">
						<v-list-item class="link" rounded="xl" v-bind="props">
							<v-list-item-title>Заказы</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
			<v-divider class="my-1" />
			<v-tooltip location="bottom" text="Подсказка 4">
				<template #activator="{ props }">
					<router-link to="/lk/wait">
						<v-list-item class="link" rounded="xl" v-bind="props">
							<v-list-item-title>Ожидание посылки</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
			<v-divider class="my-1" />
			<v-tooltip location="bottom" text="Подсказка 5">
				<template #activator="{ props }">
					<router-link to="/lk/calc">
						<v-list-item class="link" rounded="xl" v-bind="props">
							<v-list-item-title>Калькулятор стоимости</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
			<v-divider class="my-1" />

			<v-tooltip location="bottom" text="Подсказка 6">
				<template #activator="{ props }">
					<router-link to="/lk/track">
						<v-list-item class="link" rounded="xl" v-bind="props">
							<v-list-item-title>Трек номер</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
		</template>

		<template v-else>
			<v-tooltip location="bottom" text="Подсказка 7">
				<template #activator="{ props }">
					<router-link to="/lk/orders/admin">
						<v-list-item class="link" rounded="xl" v-bind="props">
							<v-list-item-title>Администратор</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
			<v-divider class="my-1" />
			<v-tooltip location="bottom" text="Подсказка 8">
				<template #activator="{ props }">
					<router-link to="/lk/wait">
						<v-list-item class="link" rounded="xl">
							<v-list-item-title v-bind="props">Чаты</v-list-item-title>
						</v-list-item>
					</router-link>
				</template>
			</v-tooltip>
		</template>
	</v-list>
</template>

<script>
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

export default {
	name: 'PersonalMenu',
	setup() {
		const userStore = useUserStore()
		const { fullName, isAdmin } = storeToRefs(userStore)

		return {
			fullName,
			isAdmin,
		}
	},
}
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	color: inherit;
	display: block;
}
.link:hover,
.router-link-active:has(.link) .link {
	background: #2546fd;
	color: #fff;
	cursor: pointer;
}
.buttons {
	margin-top: 2px;
	button:hover {
		background-color: rgba($color: #1867c0, $alpha: 0.1);
		color: #1867c0;
	}
}
.name {
	color: #2546fd;
	font-size: 18px;
}
</style>
