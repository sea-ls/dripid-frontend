<template>
	<div class="lk d-flex flex-column justify-space-between">
		<!-- <div class="d-flex w-100 ga-10 justify-space-around">
			<div class="lk__avatar"></div>
			<div class="lk__about d-flex w-100 ga-2 flex-column">
				<div class="lk__about_ro d-flex ga-1">
					<span class="lk__about_row-title">ИМЯ:</span>
					<div class="lk__about_row-text d-inline-block text-white">
						{{ accountInfo.firstName }}
					</div>
				</div>
				<div class="lk__about_row d-flex ga-1">
					<span class="lk__about_row-title">ФАМИЛИЯ:</span>
					<div class="lk__about_row-text d-inline-block text-white">
						{{ accountInfo.lastName }}
					</div>
				</div>
				<div class="lk__about_row d-flex ga-1">
					<span class="lk__about_row-title">АДРЕС:</span>
					<div class="lk__about_row-text d-inline-block text-white"></div>
				</div>
				<div class="lk__about_row d-flex ga-1">
					<span class="lk__about_row-title">EMAIL:</span>
					<div class="lk__about_row-text d-inline-block text-white">
						{{ accountInfo.email }}
					</div>
				</div>
				<div class="lk__about_row d-flex ga-1">
					<span class="lk__about_row-title">ТЕЛЕФОН:</span>
					<div class="lk__about_row-text d-inline-block text-white">
						{{ accountInfo.phone }}
					</div>
				</div>
			</div>
		</div> -->
		<div class="w-100 overflow-visible">
			<v-data-table-virtual :headers="headers" :items="orders" height="600px">
				<template v-slot:item.status="{ item }">
            <v-chip :color="store.getStatusByName(item.status).color" v-if="role === 'user'">
              {{ item.status }}
            </v-chip>
            <v-select
                v-else
                variant="outlined"
                rounded="xl"
                width="200px"
                density="compact"
                color="primary"
                :items="store.statuses"
                item-title="name"
                :model-value="item.status"
                @update:model-value="changeStatus($event,item)"
            >
            </v-select>
				</template>
			</v-data-table-virtual>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";
import {useOrdersStore} from "@/stores/orders";

export default {
	name: 'OrdersPage',
	setup() {
    const accountInfo = ref({});
    const store = useOrdersStore()
    const {orders, headers} = storeToRefs(store)
		fetch('http://212.233.73.223:8080/api/delivery-service/person/authenticated', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
		})
			.then((res) => res.json())
			.then((data) => (accountInfo.value = data.accountInfo))
    const route = useRoute()
    const role = route.params.role

    function changeStatus(event, item) {
      const store = useOrdersStore()
      store.changeStatus(event, item)
    }

		return {
			orders,
			headers,
			accountInfo,
      role,
      store,
      changeStatus
		}
	},
}
</script>

<style scoped>
:deep(.v-input__details) {
  display: none !important;
}
</style>
