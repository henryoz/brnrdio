// export const actionName = ({ dispatch }) => {
//   dispatch('ACTION_NAME');
// }

export const getBernards = ({ dispatch }, results) => {
  dispatch('GET_BERNARDS', results);
}
