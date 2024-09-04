<template>
	<div class="personal-page">
		<div>
			<div class="lk d-flex flex-column justify-space-between">
				<div class="d-flex w-100 ga-10 justify-space-around flex-column align-center">
					<v-avatar color="surface-variant" size="150">
						<v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
					</v-avatar>
					<div class="lk__about d-flex w-100 ga-2 flex-column">
						<div class="lk__about_ro d-flex ga-1">
							<span class="lk__about_row-title">ИМЯ:</span>
							<div class="lk__about_row-text d-inline-block text-white">Имя</div>
						</div>
						<div class="lk__about_row d-flex ga-1">
							<span class="lk__about_row-title">ФАМИЛИЯ:</span>
							<div class="lk__about_row-text d-inline-block text-white">Фамилия</div>
						</div>
						<div class="lk__about_row d-flex flex-column ga-1">
							<span class="lk__about_row-title">АДРЕСА:</span>
							<div v-for="address in addresses" class="lk__about_row-text d-inline-block text-white">{{address}}</div>
						</div>
            <div class="lk__about_row">
                <v-btn color="primary" @click="openDialog">Добавить адрес</v-btn>
                <v-dialog v-model="dialog" max-width="600px">
                  <v-card>
                    <v-card-title>
                      <span class="headline">Добавить адрес доставки</span>
                    </v-card-title>
                    <v-card-text>
                      <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field
                            v-model="country"
                            :rules="[rules.required]"
                            label="Страна"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="city"
                            :rules="[rules.required]"
                            label="Город"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="address"
                            :rules="[rules.required]"
                            label="Адрес"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="postalCode"
                            :rules="[rules.required, rules.postalCode]"
                            label="Индекс"
                            required
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="closeDialog">Закрыть</v-btn>
                      <v-btn color="blue darken-1" text @click="submit">Добавить</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
            </div>
						<div class="lk__about_row d-flex ga-1">
							<span class="lk__about_row-title">EMAIL:</span>
							<div class="lk__about_row-text d-inline-block text-white"></div>
						</div>
						<div class="lk__about_row d-flex ga-1">
							<span class="lk__about_row-title">ТЕЛЕФОН:</span>
							<div class="lk__about_row-text d-inline-block text-white"></div>
						</div>
						<v-divider />
						<div class="lk__about_row d-flex ga-1 flex-column">
							<span class="lk__about_row-title">Баланс:</span>
							<div class="lk__about_row-text d-inline-block text-white">0.00 Р</div>
							<span class="lk__about_row-title">
								Пополнить
								<v-icon icon="mdi-plus" color="primary" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {computed, ref} from "vue";
import {useAddressStore} from "@/stores/address";

export default {
	name: 'PersonalPage',
  setup() {
    const dialog = ref(false);
    const valid = ref(false);
    const country = ref('');
    const city = ref('');
    const address = ref('');
    const postalCode = ref('');
    const rules = {
      required: (v) => !!v || 'Это поле обязательно',
    };

    const addressStore = useAddressStore(); // Используем store

    const openDialog = () => {
      dialog.value = true;
    };

    const closeDialog = () => {
      dialog.value = false;
    };

    const submit = () => {
      if (valid.value) {
        addressStore.addAddress(country.value, city.value, address.value, postalCode.value); // Сохраняем адрес в store
        closeDialog();
        resetForm();
      }
    };

    const addresses = computed(() => {
      return addressStore.addresses
    })

    const resetForm = () => {
      country.value = '';
      city.value = '';
      address.value = '';
      postalCode.value = '';
      valid.value = false; // Сброс валидации формы
    };

    return {
      dialog,
      valid,
      country,
      city,
      address,
      postalCode,
      rules,
      openDialog,
      closeDialog,
      submit,
      addressStore,
      addresses
    };
  },
}
</script>

<style scoped>
.lk__avatar {
	width: 200px;
	height: 200px;
	background-color: gray;
	border-radius: 20px;
}

.lk__about_row-title {
	color: #304ffe;
}

.lk__about_row-text {
	width: 100%;
	background-color: gray;
	border-radius: 10px;
}
</style>
