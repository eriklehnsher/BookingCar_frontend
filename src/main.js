import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import './assets/scss/index.scss';
import { BFormCheckboxGroup } from 'bootstrap-vue'
import { store } from "./store";
import VueTimepicker from 'vue2-timepicker'
import VMdDateRangePicker from "v-md-date-range-picker";
import DateRangePicker from 'vue2-daterange-picker'
import VueCarousel from 'vue-carousel';
import DatetimePicker from 'vuetify-datetime-picker';


// Vue google map
import * as VueGoogleMaps from "vue2-google-maps"; // Import package

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDEevhr7AvkwhugFCC9wXaFx251aw7jb4w",
    libraries: 'places',
  },
});

Vue.use(DatetimePicker);
Vue.use(VueCarousel);
Vue.use(VMdDateRangePicker);
Vue.use(DateRangePicker)
Vue.component('b-form-checkbox-group', BFormCheckboxGroup)
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
new Vue({
  render: (h) => h(App),
  router,
  store

}).$mount("#app");
