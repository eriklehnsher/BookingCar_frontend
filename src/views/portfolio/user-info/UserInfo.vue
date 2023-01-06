<template>
  <div class="user">
    <div class="user__coverImg">
      <img class="user__cover" src="../../../assets/jpg/BG_car.jpeg" />
    </div>
    <div class="user__avt d-flex align-items-center justify-content-center">
      <div class="icon-camera">
        <ChangeAvt />

      </div>
    </div>

    <div class=" user__info">
      <div class=" container user__info--desc desc__profile d-flex justify-content-between">
        <div class=" desc__profile--info mt-20px">
          <div class="d-flex align-items-center ">
            <h4 class="desc__profile--name"> {{ user }} </h4>
            <ChangeInfo />
          </div>
          <div class="d-flex flex-row justify-content-between">
            <div class="desc__profile--item">
              <p class="mb-0">Ngay Sinh</p>
              <p class="mb-0">25/07/1998</p>
            </div>
            <div class="desc__profile--item">
              <p class="mb-0">Giới Tính</p>
              <p class="mb-0">nam</p>
            </div>
          </div>
        </div>
        <div class="desc__profile--info  mt-20px">
          <div class="desc__point">
            <h2> point </h2>
          </div>

        </div>
      </div>

      {{ /* user__info--desc detail */ }}
      <div class="container d-flex flex-row justify-content-between user__info--desc desc__account">
        <div class="d-flex desc__account--item">
          <p class="mr-20px">Điện thoại</p>
          <ChangePhone />
        </div>
        <div class="d-flex desc__account--item">
          <p class="mr-20px">GPLX</p>
          <ChangeLicense />
        </div>
        <div class=" d-flex flex-column desc__account--item">
          <div class="d-flex justify-content-center">
            <p class="mr-20px">Email</p>
            <ChangeEmail :user="user" />
          </div>
          <p class="mr-20px">{{ user.email }}</p>
        </div>

      </div>
    </div>
  </div>

</template>
<script>
import axiosIns from "@/libs/axiosConfig";
import ChangePhone from '@/views/portfolio/user-info/ChangePhone'
import ChangeInfo from '@/views/portfolio/user-info/ChangeInfo'
import ChangeLicense from './ChangeLicense.vue';
import ChangeEmail from './ChangeEmail.vue';
import ChangeAvt from './ChangeAvt.vue';
export default {
  components: {
    ChangeInfo,
    ChangePhone,
    ChangeLicense,
    ChangeEmail,
    ChangeAvt
  },
  data() {
    return {
      fields: [
        {
          key: "carName",
          label: "Tên Xe",
        },
        {
          key: "carStartDate",
          label: "Ngày Nhận Xe",
        },
        {
          key: "carEndDate",
          label: "Ngày Trả Xe",
        },
        {
          key: "carPrice",
          label: "Phí Thuê Xe",
        },
      ],
      user: {},
      id: localStorage.getItem("user_id") || "",
    };
  },

  mounted() {
    axiosIns
      .get(`/user/${this.id}`)
      .then((response) => {
        this.user = response.data;
        console.log(109, this.user)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  },
}
</script>
