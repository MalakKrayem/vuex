export default {
  add(context) {
    setTimeout(function () {
      context.commit("add");
    }, 2000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit("increase", payload);
  },
};
