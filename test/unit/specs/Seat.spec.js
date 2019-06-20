import Vue from 'vue'
import Seats from '../components/Seat'

describe('Seat.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Seats)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
