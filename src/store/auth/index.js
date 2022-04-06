import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    user: null,
  },
  getters: {
    // getActiveStep(state) {
    //   return state.step;
    // },
    // getFormData(state) {
    //   return state.formData.data;
    // },
  },
  mutations: {
    async login(state) {
      const session = await this._vm.$gapi.login();
      state.user = session.currentUser;
    },
  },
  actions: {
    login({ commit }) {
      commit("login");
    },
  },
};
