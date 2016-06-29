import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// the initial state object
const state = {
  bernards: [],
  votePair: [],
  bestBernard: {}
};

// All possible mutations (actions) that can be applied to the state.
// Not the best terminology considering we're striving for immutability
// but it's what the official docs call them!
export const mutations = {

  GET_BERNARDS(state, results) {
    state.bernards = state.bernards.concat(results);
  },

  GET_RANDOM_PAIR(state) {
    let max = state.bernards.length;
    let val1 = 0;
    let val2 = 0;

    function getPair(max) {
        val1 = Math.floor((Math.random() * max));
        val2 = Math.floor((Math.random() * max));

        return [val1, val2];
    }
    while (val1 === val2) {
      [val1, val2] = getPair(max);
    }
    state.votePair = [state.bernards[val1], state.bernards[val2]];
  },

  VOTE_BERNARD(state, bernard) {
    if (bernard.votes) {
      bernard.votes += 1;
    } else {
      bernard.votes = 1;
    }
  },

  // WIPE_BERNARDS(state) {
  //   state.bernards = [];
  // },

  GET_BEST_BERNARD(state) {
    state.bernards.sort(function(a, b) {
      if (!b.votes) {
          b.votes = 0;
      }
      if (!a.votes) {
        a.votes = 0;
      }
      return b.votes - a.votes;
    });
    state.bestBernard = state.bernards[0];
  }
};

export default new Vuex.Store({
  state,
  mutations
});
