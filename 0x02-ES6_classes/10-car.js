const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbol]() {
    return new this.constructor();
  }

  cloneCar() {
    const clone = this[cloneCarSymbol]();
    Object.keys(this).forEach((key) => {
      clone[key] = this[key];
    });
    return clone;
  }
}
