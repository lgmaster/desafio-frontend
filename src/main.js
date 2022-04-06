import Vue from "vue";
import VueGapi from "vue-gapi";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import clientConfig from "./services/config";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueGapi, clientConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
