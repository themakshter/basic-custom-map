import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class TextCanvasComponent implements CanvasComponent {
    private text;
    ctx: CanvasRenderingContext2D;
    position: Position;
    dimensions: Dimensions;
    fontSize: number;
    constructor(text: string, ctx: CanvasRenderingContext2D, position: Position, dimensions: Dimensions, fontSize?: number);
    draw(): Promise<void>;
}
