<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";

export default {
  components: {
    Header,
  },
  methods: {
  },
};
</script>

<style lang="scss">

</style>
