<template>
  <BaseContainer v-if="userIsAuth" title="Vuex">
    <TheCounter />
    <FavValue />
    <ChangeCounter />
    <button @click="add">Add 3</button>
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth />
  </BaseContainer>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavValue from "./components/FavValue.vue";
import UserAuth from "./components/UserAuth.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavValue,
    UserAuth,
  },

  methods: {
    add() {
      this.$store.dispatch("numbers/increase", { value: 3 });
    },
  },
  computed: {
    ...mapGetters(["userIsAuth"]),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
button {
  border-radius: 10px;
  background-color: #cc12ccbf;
  margin: 10px;
  padding: 5px;
}
</style>
