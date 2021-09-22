export default {
  add(state) {
    state.counter += 1;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};
