import Car from '../Car.js';
export default class Ferrari extends Car {
  constructor(year) {
    super(year);
    this.value = this.year * 43;
  }
}
