<template>
    <div class="license">
        <p class="mb-0 pointer license__title" @click="$bvModal.show('modal-UpdateLicense')">
            <i class="fa-solid fa-pen-to-square"></i>
        </p>
        <b-modal id="modal-UpdateLicense" class="modal__license" hide-footer hide-header>
            <h4 class="modal__license--title">Cập nhật giấy phép lái xe</h4>
            <div class="form__license d-flex flex-column ">
                <!-- license__number -->
                <span class="form__license--label">Số GPLX <i style="font-weight: 0;">(Dãy 12 chữ số ở mặt trước
                        GPLX)</i> </span>
                <b-input type="number" placeholder="Nhập số GPLX đã cấp" class="form__license--input"
                    v-model="formUpdateLicense.licenseNumber"></b-input>
                <!-- license__name -->
                <span class="form__license--label">Họ tên</span>
                <b-input type="text" placeholder="Nhập đầy đủ họ và tên" class="form__license--input"
                    v-model="formUpdateLicense.licenseName"></b-input>
                <!-- license__dob -->
                <span class="form__license--label">Ngày sinh </span>
                <b-input type="date" class="form__license--input" v-model="formUpdateLicense.licenseDob"></b-input>
                <!-- license__img -->
                <span class="form__license--label">Ảnh bằng lái xe</span>
                <span class="">Hình ảnh GPLX mặt trước</span>
                <div class="form__license--img d-flex justify-content-center align-items-center">
                    <input type="file" id="file" accept="image/*" multiple @change="processFiles($event)" />
                    <label class="label__file" for="file">
                        Chọn hình
                    </label>
                </div>
            </div>
            <input type="button" class="license-form__input--button" @click="submitLicense()" value="CẬP NHẬT" />

        </b-modal>
    </div>
</template>
<script>


export default {

    data() {
        return {
            formUpdateLicense: {
                licenseName: "",
                licenseNumber: "",
                licenseDob: "",
                licenseImg: "",
            },
        };
    },
    methods: {
        async submitLicense() {
            const data = {
                licenseName: this.formUpdateLicense.licenseName,
                licenseNumber: this.formUpdateLicense.licenseNumber,
                licenseDob: this.formUpdateLicense.licenseDob,
                licenseImg: this.formUpdateLicense.licenseImg,
            };
        
        },
        processFiles(event) {

        }
    },
};
</script>
<style>

</style>
  