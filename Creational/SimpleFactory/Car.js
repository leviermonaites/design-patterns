export default class Car {
    constructor(year) {
        this._year = year;
    }

    getValue() {
        return this.value;
    }

    get year() {
        return this._year;
    }

    set year(v) {
        return this._year;
    }
}
