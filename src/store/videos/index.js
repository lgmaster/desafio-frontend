import { searchVideos, listVideos } from "@/services/service";

export default {
  namespaced: true,
  state: {
    searchedVideos: null,
    featuredVideos: null,
    moreVideos: null,
    playedVideo: null,
  },
  getters: {
    getSearchedVideos(state) {
      return state.searchedVideos;
    },
    getFeaturedVideos(state) {
      return state.featuredVideos;
    },
    getMoreVideos(state) {
      return state.moreVideos;
    },
    getPlayedVideo(state) {
      return state.playedVideo;
    },
  },
  mutations: {
    search(state, payload) {
      state.searchedVideos = payload;
    },
    listFeatured(state, payload) {
      state.featuredVideos = payload;
    },
    moreVideos(state, payload) {
      state.moreVideos = payload;
    },
    playVideo(state, payload) {
      state.playedVideo = payload;
    },
  },
  actions: {
    async search({ commit }, query) {
      const list = await searchVideos(query);
      commit("search", list.data.items);
    },
    async listFeatured({ commit }, params) {
      const list = await listVideos(params);
      commit("listFeatured", list.data.items);
    },
    async moreVideos({ commit }, params) {
      const list = await listVideos(params);
      commit("moreVideos", list.data.items);
    },
    async playVideo({ commit }, id) {
      commit("playVideo", id);
    },
  },
};
