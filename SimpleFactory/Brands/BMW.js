import Car from '../Car.js';
export default class BMW extends Car {
    constructor() {
        super(this);
        this.value = this.year * 40;
    }
}