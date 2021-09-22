import { createStore } from "vuex";
import rootMutations from "./mutations.js";
import rootGetters from "./getters.js";
import rootActions from "./actions.js";
import counterMoudels from "./counter/index.js";

export default createStore({
  state: {
    userAuth: false,
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
  modules: {
    numbers: counterMoudels,
  },
});
