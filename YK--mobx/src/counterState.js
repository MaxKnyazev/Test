import { observable } from 'mobx';

const counterState = {
  count: 0,
  increment() {
    this.count++
  },
  decrement() {
    this.count--
  }
};

export default observable(counterState);