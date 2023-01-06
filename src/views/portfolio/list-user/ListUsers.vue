<template>
    <div class="list__user">
      <h1 class="mb-20px">Danh sách người dùng:</h1>
      <div class="list__user--searh d-flex align-items-center">
        <i class="mb-20px fa-solid fa-magnifying-glass"></i>
        <b-input
          class="search--input"
          type="search"
          placeholder="nhập để tìm kiếm..."
        ></b-input>
      </div>
      <b-table responsive striped hover :fields="fields" :items="listUser">
        <template #cell(name)="user">
          <p class="text-capitalize">{{ user.item.username }}</p>
        </template>
  
        <template #cell(email)="user">
          <p>{{ user.item.email }}</p>
        </template>
        <template #cell(phone)="user">
          <p class="text-capitalize">{{ user.item.phone }}</p>
        </template>
        <template #cell(action)="user">
          <div class="d-flex">
            <!-- <b-button @click="DeleteUser(user.item._id)" class="mr-16px">
              Xóa
            </b-button> -->
            <b-button @click="UpdateUser()" class="mr-16px"> Cập nhật </b-button>
            <b-button @click="DetailUser(user.item._id)">
              Chi tiết người dùng
            </b-button>
          </div>
        </template>
      </b-table>
    </div>
  </template>
  
  <script>
  import axiosIns from "@/libs/axiosConfig";
  
  export default {
    props: {
      update: {
        type: Object,
        default: null,
      },
    },
  
    data() {
      return {
        user: {},
        fields: [
          {
            key: "name",
            label: "Tên",
          },
          {
            key: "email",
            label: "Địa chỉ Email",
          },
          {
            key: "phone",
            label: "Số điện thoại",
          },
          {
            key: "action",
            label: "Chỉnh sửa",
          },
        ],
        listUser: [],
        listUserUpdate: {},
      };
    },
    methods: {
      newUserUpdate(element) {
        this.listUser.push(element.data);
      },
      DeleteUser(id) {
        axiosIns
          .delete(`/user/${id}`)
          .then((response) => {
            for (let i = 0; i < this.listUser.length; i++) {
              if (id === this.listUser[i]._id) {
                this.listUser.splice(i, 1);
              }
            }
          })
          .catch(() => {
            console.log("error");
          });
      },
      UpdateUser() {
        console.log("Update");
      },
      DetailUser(id) {
        console.log("Detail", id);
        this.$router.push(`/user/${id}`);
      },
    },
    mounted() {
      // Fetch all users
      axiosIns
        .get("/user/all")
        .then((response) => {
          this.listUser = response.data;
          console.log(this.listUser);
        })
        .catch(() => {
          console.log("error");
        });
    },
  };
  </script>
  <style lang="scss" scoped>
  .list__user--search {
    margin-bottom: 20px;
    border: 2px solid grey;
  }
  .fa-solid.fa-magnifying-glass {
    font-size: 20px;
  }
  .search--input {
    width: 50%;
    margin-bottom: 20px;
    border: 0px;
    border-bottom: 2px solid grey;
    border-radius:0px;
  }
  </style>