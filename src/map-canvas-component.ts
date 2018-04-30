import MapPinCanvasComponent from "./map-pin-canvas-component";
import ImageCanvasComponent from "./image-canvas-component"
import TextCanvasComponent from "./text-canvas-component"
import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class MapCanvasComponent implements CanvasComponent {
  draw() {}
  constructor(private name: string, private imageSource: string, private pins: Array<MapPinCanvasComponent>, public position: Position, public dimensions: Dimensions){}
}
