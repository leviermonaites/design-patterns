import Car from '../Car.js';
export default class Ferrari extends Car {
    constructor() {
        this.value = this.year * 43;
    }
}