export default {
  testAuth(state) {
    return state.userAuth;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizedCounter(_, getters) {
    // const finalCounter = state.counter * 2;
    if (getters.finalCounter < 0) {
      return 0;
    }
    if (getters.finalCounter > 100) {
      return 100;
    }
    return getters.finalCounter;
  },
};
