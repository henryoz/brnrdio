import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router';
import store from './vuex/store';
import { sync } from 'vuex-router-sync';
import App from './App.vue';

// TODO: figure out a way to ensure this only applies in dev, never prod!
Vue.config.devtools = true;

Vue.use(VueResource);

/* eslint-disable no-new */
sync(store, router);

router.start(App, '#app');

// new Vue({
//   store,
//   el: 'body',
//   components: { App }
// });
