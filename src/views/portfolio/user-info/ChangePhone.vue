<template>
    <div>
        <p class="mb-0 pointer phone__title" @click="$bvModal.show('modal-UpdatePhone')">
            <i class="fa-solid fa-pen-to-square"></i>
        </p>
        <b-modal id="modal-UpdatePhone" class="modal" hide-footer hide-header>
            <p class="modal__title text-center">Cập nhật số điện thoại</p>
            <!-- Form -->
            <div class="text-center phone__form d-flex flex-column justify">
                    <b-input class="phone-form__input" placeholder="Nhập số điện thoại mới*" v-model="formUpdatePhone.phone" />
            </div>
            <input type="button" class="phone__form--button" @click="submitUpdate()" value="CẬP NHẬT" />
        </b-modal>
    </div>
</template>
<script>


export default {
   
    data() {
        return {
            formUpdatePhone: {
                phone: "",
            },
        };
    },
    methods: {
        async submitUpdate() {
            const data = {
                phone: this.formUpdatePhone.phone,
            };
        },
    },
};
</script>
<style>

</style>
  