import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Vote from  './components/Vote/Vote.vue';
import Bernard from './components/Bernard/Bernard.vue';
import fourOhFour from './components/FourOhFour/FourOhFour.vue';

Vue.use(VueRouter);

const router = new VueRouter();

// Specify new routes
router.map({
  '/': {
    component: App,
    name: 'home'
  },
  '/vote': {
    component: Vote,
    name: 'vote'
  },
  '/details/:id': {
    component: Bernard,
    name: 'bernard'
  },
  '/404' : {
    component: fourOhFour
  }
});

// Handle default routing
router.redirect({
  '*': '/404'
});

export default router;
