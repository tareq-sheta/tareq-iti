import { Rectangle, Square } from "./squaresModule.js";

import { Circle } from "./circleModule.js";

let rect1 = new Rectangle(10, 20, "blue");
rect1.getArea();
let square1 = new Square(10, "red");
square1.getArea();
let cir1 = new Circle(10, 15, 14, "yellow");
cir1.getArea();
