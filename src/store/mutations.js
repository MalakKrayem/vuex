export default {
  auth(state, payload) {
    state.userAuth = payload.isAuth;
  },
  /* auth(state){
      state.userAuth=!state.userAuth
    } */
};
