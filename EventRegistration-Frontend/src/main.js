// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import moment from "moment";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
});

Vue.filter("formatTime", function (value) {
  if (value) {
    return moment(String(value), "HH:mm:ss").format("hh:mm A");
  }
});

Vue.filter("formatDate", function (value) {
  if (value) {
    return moment(String(value), "YYYY-MM-DD").format("MMMM Do, YYYY");
  }
});

Vue.filter("formatCurrency", function (value) {
  if (value) {
    return (Math.round(value * 100) / 100).toFixed(2);
  }
});
