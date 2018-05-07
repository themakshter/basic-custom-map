import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class ImageCanvasComponent implements CanvasComponent {
    private imageSource;
    ctx: CanvasRenderingContext2D;
    position: Position;
    dimensions: Dimensions;
    constructor(imageSource: string, ctx: CanvasRenderingContext2D, position: Position, dimensions: Dimensions);
    draw(): Promise<void>;
}
