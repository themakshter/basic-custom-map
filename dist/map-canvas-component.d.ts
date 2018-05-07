import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class MapCanvasComponent implements CanvasComponent {
    private title;
    private imageSource;
    private pins;
    ctx: CanvasRenderingContext2D;
    position: Position;
    dimensions: Dimensions;
    constructor(title: string, imageSource: string, pins: Array<any>, ctx: CanvasRenderingContext2D, position: Position, dimensions: Dimensions);
    draw(): Promise<void>;
}
