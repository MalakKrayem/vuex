<template>
  <div>
    <h3>{{ normalizedCounter }}</h3>
    <p>We can do more...</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    /* counter() {
      return this.$store.getters["numbers/normalizedCounter"];
    }, */
    ...mapGetters("numbers", ["normalizedCounter"]),
  },
};
</script>

<style lang="scss" scoped></style>
