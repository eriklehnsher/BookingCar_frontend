<template>
	<div>
		<p class="mb-0 pointer email__title" @click="$bvModal.show('modal-Update')">
			<i class="fa-solid fa-pen-to-square"></i>
			<!-- <i class="fa-solid fa-pen-nib"></i> -->
		</p>
		<b-modal id="modal-UpdateEmail" class="modal" hide-footer hide-header>
			<p class="modal__title text-center">Cập nhật địa chỉ Email</p>
			<b-input class="email-form__input" placeholder="nhập Email mới " v-model="formUpdate.username" />
			<input type="button" class="email__form--button" @click="submitUpdate()" value="Cập Nhật" />
			{{ user }}
		</b-modal>
	</div>
</template>
<script>

import axiosIns from "@/libs/axiosConfig";
export default {
	props: {
		user: {
			type: Object,
			default: null,
		}
	},
	data() {
		return {
			formUpdate: {
				username: "",
			},
		};
	},
	methods: {
		async submitUpdate(id) {
			const data = {
				username: this.formUpdate.username,
			};
			await axiosIns
				.put(`/changeUserName/${id}`)
				.then((response) => {

				})
				.catch(() => {
					console.log("error");
				});
		},
	},
};
</script>
<style>

</style>
  