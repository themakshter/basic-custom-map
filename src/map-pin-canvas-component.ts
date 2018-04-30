import ImageCanvasComponent from "./image-canvas-component"
import TextCanvasComponent from "./text-canvas-component"
import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class MapPinCanvasComponent implements CanvasComponent {
  constructor(private name:string, private imageSource: string,public position: Position, public dimensions: Dimensions){}
  draw() {}
}
