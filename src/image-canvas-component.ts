import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class ImageCanvasComponent implements CanvasComponent{
  constructor(private imageSource: string, public position: Position, public dimensions: Dimensions){}
  draw() {}
}
