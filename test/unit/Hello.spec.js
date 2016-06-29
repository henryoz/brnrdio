/* global describe, it, expect */

import Vue from 'vue';
import Hello from '../../src/components/Hello.vue';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><hello></hello></div>',
      components: { Hello }
    }).$mount();
    expect(vm.$el.querySelector('.hello h1').textContent).toBe('Check your console!');
  });
});
