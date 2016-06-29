/* global describe, it, expect */

import { mutations } from '../../src/vuex/store';

const { GET_BERNARDS } = mutations;

describe('State Store', () => {
  it('should build an array of Bernard Hills based on the results passed to it', () => {
    const state = {
      bernards: [],
      votePair: [],
      bestBernard: {}
    };

    const results = [
      {name: 'bernard1', contentUrl: 'imageurl.com/1' },
      {name: 'bernard2', contentUrl: 'imageurl.com/2' },
      {name: 'bernard3', contentUrl: 'imageurl.com/3' },
      {name: 'bernard4', contentUrl: 'imageurl.com/4' },
      {name: 'bernard5', contentUrl: 'imageurl.com/5' }
    ]

    GET_BERNARDS(state, results);

    expect(state).toEqual({
      bernards: results,
      votePair: [],
      bestBernard: {}
    });
  });
});
