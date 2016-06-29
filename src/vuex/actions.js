// export const actionName = ({ dispatch }) => {
//   dispatch('ACTION_NAME');
// }

export const getBernards = ({ dispatch }, results) => {
  dispatch('GET_BERNARDS', results);
}

export const getRandomPair = ({ dispatch }) => {
  dispatch('GET_RANDOM_PAIR');
}

export const voteBernard = ({ dispatch }, bernard) => {
  dispatch('VOTE_BERNARD', bernard);
}

export const getBestBernard = ({ dispatch }) => {
  dispatch('GET_BEST_BERNARD');
}
