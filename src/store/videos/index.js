import Vue from "vue";
import Vuex from "vuex";

import { searchVideos } from "@/services/service";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    foundVideos: null,
  },
  getters: {
    getfoundVideos(state) {
      return state.foundVideos;
    },
  },
  mutations: {
    async search(state, query) {
      const list = await searchVideos(query);
      state.foundVideos = list.data.items;
    },
  },
  actions: {
    search({ commit }, query) {
      commit("search", query);
    },
  },
};
