<template>
  <div class="portfolio">
    <b-card-body class="portfolio__card">
      <b-tabs card pills vertical class="portfolio__tab">

        <!-- <b-tab title="Tài Khoản" active class="portfolio__tab--user-info">
            <UserInfo />
          </b-tab> -->
        <b-tab title="Danh sách người dùng" class="portfolio__tab--user-info">
          <ListUsers />
        </b-tab>
        <b-tab class="portfolio__tab--list-booking" title="Lượt đặt xe">
          <ListBooking></ListBooking>
        </b-tab>


        <!-- <div v-if="isCustomer"> -->


        <b-tab class="portfolio__tab--list-car" title="Danh sách Xe">
          <ListCar></ListCar>
        </b-tab>
        <b-tab class="portfolio__tab--list-booking" title="Danh sách chủ xe">
          <b-tabs content-class="mt-3">
            <b-tab title="danh sách chủ xe (chờ duyệt)">
              <ListPendingVendor></ListPendingVendor>
            </b-tab>
            <b-tab title="List Approved">
              <ListApprovedVendor></ListApprovedVendor>
            </b-tab>
            <b-tab title="List Rejected">
              <ListRejectedVendor></ListRejectedVendor>
            </b-tab>
          </b-tabs>
        </b-tab>


      </b-tabs>
    </b-card-body>
  </div>
</template>

<script>
import UserInfo from "./user-info/UserInfo.vue";
import ListCar from "./list-car/ListCar.vue";
import ListUsers from "./list-user/ListUsers.vue";
import ListBooking from "./list-booking/ListBooking.vue";
import ListPendingVendor from "./list-vendor/ListPendingVendor.vue";
import ListRejectedVendor from "./list-vendor/ListRejectedVendor.vue";
import ListApprovedVendor from "./list-vendor/ListApprovedVendor.vue";

export default {
  components: {
    ListCar,
    ListBooking,
    ListUsers,
    // UserInfo,
    ListPendingVendor,
    ListRejectedVendor,
    ListApprovedVendor,
  },
};
</script>

<style>
.nav {
  width: auto;
  justify-content: flex-start;
  --bs-nav-link-color: none;
  padding: none;
}

.nav-pills .nav-link.active {
  width: 100%;
  background-color: white;
  color: green;
  height: auto;
  padding: none;
  text-align: center;
  box-shadow: 0 1px 6px rgb(0 0 0 / 30%);
}

.nav-pills .nav-link.inactive {
  border-bottom: 2px solid green;
}

.nav-link {
  text-align: center;
  margin-bottom: 40px;

}

.portfolio__tab {
  margin-top: 20px;
}

.portfolio__tab--user-info {
  border-right: 2px solid black;

}


.nav-item {
  padding: none;
  font-size: 12px;
  font-weight: 600;
}

.col-auto {
  width: 10%;
}

.row {
  --bs-gutter-x: 1rem;
}

.card-header {
  padding: 4px;
}
</style>