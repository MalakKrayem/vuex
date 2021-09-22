<template>
  <button v-if="!userIsAuth" @click="login">Login</button>
  <button v-if="userIsAuth" @click="logout">Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    //  ...mapActions(['auth'])
    ...mapActions(["login", "logout"]),
  },
  computed: {
    ...mapGetters(["userIsAuth", "testAuth"]),
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
