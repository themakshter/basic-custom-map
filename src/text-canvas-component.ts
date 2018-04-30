import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class TextCanvasComponent implements CanvasComponent{
  constructor(private text: string, public position: Position, public dimensions: Dimensions){}
  draw() {}
}
