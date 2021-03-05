import Car from '../Car.js';
export default class Mercedes extends Car {
  constructor(year) {
    super(year);
    this.value = this.year * 37;
  }
}
