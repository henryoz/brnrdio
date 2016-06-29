import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello.vue';

Vue.use(VueRouter);

const router = new VueRouter();

// Specify new routes
router.map({
  '/hello': {
    component: Hello
  }
});

// Handle default routing
router.redirect({
  '*': '/hello'
});

export default router;
