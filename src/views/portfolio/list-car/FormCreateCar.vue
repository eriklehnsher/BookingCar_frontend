<template>
	<div>
		<button class="carform__button--modal btn btn-block" v-b-modal.modal-prevent-closing>
			Tạo Xe Mới Ngay!
		</button>
		<b-modal class="carform__modal" id="modal-prevent-closing" ref="modal"
			title="VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN DƯỚI ĐÂY !" @show="resetModal" @hidden="resetModal" @ok="handleOk"
			hide-header-close size="lg">
			<form ref="" @submit.stop.prevent="handleSubmit">
				<h5 class="carform--title">Thông Tin Cơ Bản</h5>
				<p class="carform--title__warn">
					Lưu ý: Các thông tin cơ bản sẽ không thể thay đổi sau khi đăng kí.
				</p>
				<div class="d-flex flex-wrap justify-content-center">
					<b-form-group label="Tên Xe" class="carform__detail mr-20px">
						<b-form-input id="name-input" class="carform__detail--input" v-model="form.name"></b-form-input>
					</b-form-group>
					<b-form-group label="Loại Xe" class="carform__detail ">
						<b-form-select class="carform__detail--input carform__select" v-model="form.type"
							:options="typeOptions"></b-form-select>
					</b-form-group>

					<b-form-group label="Số ghế" class="carform__detail mr-20px ">
						<b-form-select class="carform__detail--input carform__select" v-model="form.seat"
							:options="seatOptions"></b-form-select>
					</b-form-group>

					<b-form-group label="Dung lượng Pin" class=" carform__detail mb-24px ">
						<b-form-input class="carform__detail--input carform__battCapa" id="battCapa"
							v-model="form.battCapa"></b-form-input>
					</b-form-group>

					<b-form-group label="Loại động cơ" class="carform__detail mr-20px">
						<b-form-select class="carform__detail--input carform__select" v-model="form.fuel"
							:options="fuelOptions"></b-form-select>
					</b-form-group>

					<b-form-group label="Mô tả ngắn" class="carform__detail mb-24px ">
						<b-form-textarea class="carform__detail--input " id="decs" v-model="form.desc"
							placeholder="Mô tả ngắn"></b-form-textarea>
					</b-form-group>
				</div>


				<b-form-group label="Các tính năng cơ bản">
					<div class="carform__feature--img d-flex">
						<img src="../../../assets/svg/map.png" />
						<img src="../../../assets/svg/360_camera.png" />
						<img src="../../../assets/svg/gps.png" />
						<img src="../../../assets/svg/usb.png" />
						<img src="../../../assets/svg/spare_tire.png" />
						<img src="../../../assets/svg/airbags.png" />
					</div>
					<b-form-checkbox-group class="carform__feature" v-model="form.features" :options="featureOptions"
						value-field="item" text-field="name">
					</b-form-checkbox-group>
				</b-form-group>

				<b-form-group label="Các Giấy phép liên quan">
					<b-form-checkbox-group class="carform__requirements" v-model="form.requiredDocuments"
						:options="requiredDocumentsOptions" value-field="item"
						text-field="name"></b-form-checkbox-group>
				</b-form-group>
				<div class="d-flex flex-row">
					<b-form-group label="Thế Chấp" class="carform__detail mr-10px mt-24px">
						<b-form-input class="carform__mortgage" id="collateral-input" v-model="form.collateral"
							type="number"></b-form-input>
					</b-form-group>

					<b-form-group label="Giá Thuê" class="carform__detail mt-24px ml-10px mb-24px">
						<b-form-input class="carform__price" id="price-input" v-model="form.price"
							type="number"></b-form-input>
					</b-form-group>
				</div>


				<Map @onChangeDistrict="(value) => onChangeDistrict(value)"
					@onChangeWard="(value) => onChangeWard(value)"
					@onChangeAddressDetails="(value) => onChangeAddressDetails(value)"></Map>

				<draggable :list="list" :disabled="!enabled" class="list-group mb-3" ghost-class="ghost"
					@start="dragging = true" @end="dragging = false">
					<div class="list-group-item" v-for="(element, index) in list" :key="index">
						<b-button class="close-btn" @click="deleteItem(element, index)">
							<i class="fas fa-times"></i>
						</b-button>
						<img :src="element.src" alt="image" />
					</div>
				</draggable>
				<label class="label__carImg" for="uploads__carImg">Tải ảnh lên</label>
				<input ref="uploadImage" type="file" id="uploads__carImg" accept="image/*" multiple
				@change="processFiles($event)" />

			</form>
		</b-modal>
	</div>
</template>

<script>
import draggable from "vuedraggable";
import axiosIns from "@/libs/axiosConfig";
import Map from "./Map.vue";

export default {
	components: { draggable, Map },
	data() {
		return {
			name: "",
			nameState: null,
			form: {
				name: "",
				type: "",
				seat: "",
				battCapa: "",
				fuel: "",
				desc: "",
				features: [],
				requiredDocuments: [],
				collateral: "",
				price: "",
				address: {
					district: "",
					ward: "",
					addressDetail: "",
				},
				images: "",
			},
			typeOptions: [
				{ value: "xe-tu-lai", text: "Xe tự lái" },
				{ value: "Xe-co-tai-xe", text: "Xe có tài xế" },
			],
			seatOptions: [
				{ value: "Xe-2-cho", text: "Xe 2 chỗ" },
				{ value: "4-5-cho", text: "Xe 4-5 chỗ" },
				{ value: "xe-7-cho", text: "Xe 7 chỗ" },
				{ value: "Xe-12-cho", text: "Xe 12 chỗ" },
			],
			fuelOptions: [
				{ value: "dong-co-xang", text: "động cơ xăng" },
				{ value: "dong-co-diesel", text: "động cơ diesel" },
				{ value: "dong-co-dien", text: "động cơ điện" },
			],
			featureOptions: [
				{ item: "map", name: "Bản đồ" },
				{ item: "camera", name: "Camera" },
				{ item: "gps", name: "Định vị GPS" },
				{ item: "usb", name: "Khe cắm USB" },
				{ item: "tire", name: "Lốp dự phòng" },
				{ item: "airbag", name: "Túi khí an toàn" },
			],
			requiredDocumentsOptions: [
				{ item: "cmnd", name: "Căn cước công dân" },
				{ item: "gplx", name: "Giấy phép lái xe" },
				{ item: "pp-hk", name: "Passport hoặc Hộ khẩu" },
			],
			list: [],
			enabled: true,
			url: process.env.VUE_APP_API_URL,
		};
	},
	methods: {
		resetModal() {
			(this.list = []),
				(this.form = {
					name: "",
					type: "",
					seat: "",
					battCapa: "",
					fuel: "",
					desc: "",
					features: [],
					requiredDocuments: [],
					collateral: "",
					price: "",
					address: { district: "", ward: "", addressDetail: "" },
					images: "",
				});
		},
		handleOk(bvModalEvent) {
			bvModalEvent.preventDefault();
			this.handleSubmit();
		},
		handleSubmit() {
			this.form.images = this.list;
			axiosIns
				.post("/car/create", this.form)
				.then((response) => {
					this.$emit("newCarData", response);
				})
				.catch(() => {
					console.log("error");
				});
			this.$nextTick(() => {
				this.$bvModal.hide("modal-prevent-closing");
			});
		},

		onChangeDistrict(value) {
			this.form.address.district = value;
		},
		onChangeAddressDetails(value) {
			this.form.address.addressDetail = value ? value : "";
		},
		onChangeWard(value) {
			this.form.address.ward = value;
		},

		processFiles(event) {
			let files = event.target.files;
			let formData = new FormData();
			for (var i = 0; i < files.length; i++) {
				formData.append("files", files[i]);
			}
			axiosIns
				.post("/images/car", formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((response) => {
					response.data.files_url.forEach((file) => {
						this.list.push({
							src: this.url + file,
						});
					});
					console.log(this.list);
				})
				.catch(() => {
					console.log("something went wrong!!");
				});
		},

		deleteItem(element, index) {
			this.list.splice(index, 1);
			// axiosIns
			// 	.post("/deleteFile", {
			// 		images: [element.src.substring(this.url.length)],
			// 		type: "property",
			// 	})
			// 	.then((res) => {});
		},
	},
};
</script>