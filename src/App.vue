<template src='./App.html'></template>

<style lang='scss' src='./App.scss'></style>

<script>
  import Home from './components/Home/Home.vue';
  import BestBernard from './components/BestBernard/BestBernard.vue';
  import store from './vuex/store';
  export default {
    components: {
      Home,
      BestBernard
    },
    store
  };
</script>
