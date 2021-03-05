import Car from '../Car.js';
export default class BMW extends Car {
  constructor(year) {
    super(year);
    this.value = this.year * 40;
  }
}
