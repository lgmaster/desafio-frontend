import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import videos from "./videos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    videos,
  },
});
