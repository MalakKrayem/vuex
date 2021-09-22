export default {
  /* auth(context) {
      context.commit("auth");
    }, */
  login(context) {
    context.commit("auth", { isAuth: true });
  },
  logout(context) {
    context.commit("auth", { isAuth: false });
  },
};
