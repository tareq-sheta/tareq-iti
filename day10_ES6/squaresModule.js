import { Shape } from "./shapeModule.js";
export class Rectangle extends Shape {
  #height = 0;
  #width = 0;
  constructor(_height, _width, _color = "") {
    super(_color);
    this.height = _height;
    this.width = _width;
  }
  set height(val) {
    if (/^[0-9]+$/.test(val)) {
      this.#height = val;
    }
  }
  get height() {
    return this.#height;
  }
  set width(val) {
    if (/^[0-9]+$/.test(val)) {
      this.#width = val;
    }
  }
  get width() {
    return this.#width;
  }
  getArea() {
    this.DrawShape();
    console.log(`Area rect : ${this.#height * this.#width}`);
    console.log(`\n____________\n`);
  }
}
export class Square extends Rectangle {
  constructor(_height, _color) {
    super(_height, _height, _color);
  }
}

// color.DrawShape();
