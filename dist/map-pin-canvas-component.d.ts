import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class MapPinCanvasComponent implements CanvasComponent {
    private name;
    private imageSource;
    ctx: CanvasRenderingContext2D;
    position: Position;
    dimensions: Dimensions;
    constructor(name: string, imageSource: string, ctx: CanvasRenderingContext2D, position: Position, dimensions: Dimensions);
    draw(): Promise<void>;
}
