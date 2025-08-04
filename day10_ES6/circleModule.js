import { Shape } from "./shapeModule.js";
export class Circle extends Shape {
  #x;
  #y;
  #radius;
  constructor(rad, x, y, _color) {
    super(_color);
    this.radius = rad;
  }
  set x(val) {
    this.#x = val;
  }
  get x() {
    return this.#x;
  }
  set y(val) {
    this.#y = val;
  }
  get y() {
    return this.#x;
  }
  set radius(val) {
    this.#radius = val;
  }
  get radius() {
    return this.#radius;
  }

  getArea() {
    this.DrawShape();
    console.log(
      `Area cir : ${(Math.pow(+this.#radius, 2) * Math.PI).toFixed(2)}`
    );
    console.log(`\n____________\n`);
  }
}
