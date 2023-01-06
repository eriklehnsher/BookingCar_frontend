<template>
    <div>
        <p class="mb-0 pointer changeInfo__title" @click="$bvModal.show('modal-UpdateUser')">
            <i class="fa-solid fa-user-pen"></i>
            <!-- <i class="icon__editForm fa-solid fa-pen-to-square"></i> -->
        </p>
        <b-modal id="modal-UpdateUser" class="modal" hide-footer hide-header>
            <p class="modal__title text-center">Cập nhật thông tin</p>
            <!-- Form -->
            <div class="text-center userInfo__form d-flex flex-column justify">
                <!-- name -->
                <div class="userInfo__form--name d-flex flex-column align-items-start">

                 
                    <b-input class="userInfo-form__input" placeholder="Tên hiển thị" v-model="formUpdateUser.name" />

                </div>
                <!-- DoB -->
                <div class="d-flex flex-column align-items-start">
                    <b-input type="date" class="userInfo-form__input" placeholder=""
                        v-model="formUpdateUser.UserDob" />
                </div>
                <!-- Gender -->
                <div class="d-flex mb-40px flex-column align-items-start">
                    <b-form-select class="userInfo__form--select" :options="genderOptions">
                    </b-form-select>
                </div>
            </div>

            <input type="button" class="userInfo__form--button" @click="submitUpdate()" value="CẬP NHẬT" />

        </b-modal>
    </div>
</template>
<script>


export default {

    data() {
        return {
            formUpdateUser: {
                name: "",
                birthday: "",
                gender: "",
            },
            genderOptions: [
                { value: "male", text: "Nam" },
                { value: "female", text: "Nữ" },

            ],
        };
    },
    methods: {
        async submitUpdate() {
            const data = {
                name: this.formUpdateUser.name,
                birthday: this.formUpdateUser.birthday,
                gender: this.formUpdateUser.gender,

            };

        },
    },
};
</script>
<style>
.changeInfo__title {
    width: auto;

}

.icon__editForm {
    font-size: 30px;
    margin-bottom: 10px;
}
</style>
  