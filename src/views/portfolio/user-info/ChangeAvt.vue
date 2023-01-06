<template>
    <div>
        <p class="mb-0 pointer login__title" @click="$bvModal.show('modal-UpdateAvt')">
            <i class="fa-solid fa-camera"></i>
        </p>
        <b-modal id="modal-UpdateAvt" class="modal" hide-footer hide-header>
            <p class="modal__title text-center">Cập nhật ảnh đại diện</p>
            <!-- Form -->
            <div class="text-center login__form d-flex flex-column justify">
                <div class="login__form--avt d-flex-8px flex-column align-items-start mb-3">
                   
                    <input ref="uploadImage" type="file" accept="image/*" multiple @change="processFiles($event)" />
                    <!-- <b-input class="login-form__input" placeholder="nhập avt mới " v-model="formUpdateUser.avt" /> -->
                </div>


            </div>

            <input type="button" class="Avt-form__input--button" @click="submitUpdateAvt()" value="Chọn hình" />

        </b-modal>
    </div>
</template>
<script>


export default {

    data() {
        return {
            formUpdateUser: {
                avt: "",
            },
        };
    },
    methods: {
        async submitUpdateAvt() {
            const data = {
                avt: this.formUpdateUser.avt,
            };
        },
    },
};
</script>
<style>

</style>
  