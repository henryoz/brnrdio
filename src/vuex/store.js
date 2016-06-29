import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// the initial state object
const state = {
  bernards: []
};

// All possible mutations (actions) that can be applied to the state.
// Not the best terminology considering we're striving for immutability
// but it's what the official docs call them!
const mutations = {

  GET_BERNARDS(state, results) {
    state.bernards.push(results);
  },

  VOTE_BERNARD(state, bernard) {
    bernard.votes += 1;
  },

  WIPE_BERNARDS(state) {
    state.bernards = [];
  },

  BEST_BERNARD(state) {
    state.bernards.sort(function(a, b) {
      return b.votes - a.votes;
    });
    return state.bernards[0];
  }
};

export default new Vuex.Store({
  state,
  mutations
});
