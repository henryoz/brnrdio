import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// the initial state object
const state = {};

// All possible mutations (actions) that can be applied to the state.
// Not the best terminology considering we're striving for immutability
// but it's what the official docs call them!
const mutations = {};

export default new Vuex.Store({
  state,
  mutations
});
