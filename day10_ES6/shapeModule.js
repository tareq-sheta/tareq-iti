export class Shape {
  #color = "";
  constructor(_color) {
    this.color = _color;
  }
  set color(color) {
    if (/^[a-zA-Z]+$/.test(color)) {
      this.#color = color;
    }
  }
  Color() {
    return this.#color;
  }
  DrawShape() {
    console.log("DrawShape Call > " + this.#color + "\n");
  }
}
// default Shape;
// let shape = new Shape("color").DrawShape();
