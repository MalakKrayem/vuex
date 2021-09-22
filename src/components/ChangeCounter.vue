<template>
  <div>
    <button @click="add">Add</button>
    <button @click="inc({ value: 10 })">Add 10</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    /*  addOne() {
      //  this.$store.commit('increase',{value:10})
      this.$store.dispatch({
        type: "add",
        value: 10,
      });
    },*/
    // ...mapActions(["add", "increase"]),
    ...mapActions("numbers", {
      add: "add",
      inc: "increase",
    }),
  },
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 10px;
  background-color: #cc12ccbf;
  margin: 20px;
  padding: 5px;
}
</style>
