export default {
  namespaced: true,
  state: {
    user: null,
    userSession: null,
  },
  getters: {
    getUserSession(state) {
      return state.userSession;
    },
  },
  mutations: {
    login(state, payload) {
      state.user = payload;
      const session = localStorage.getItem("gapi.session");
      state.userSession = JSON.parse(session);
    },
    userSession(state, payload) {
      state.userSession = JSON.parse(payload);
    },
  },
  actions: {
    async login({ commit }) {
      const session = await this._vm.$gapi.login();
      commit("login", session.currentUser);
    },
    userSession({ commit }, session) {
      commit("userSession", session);
    },
  },
};
