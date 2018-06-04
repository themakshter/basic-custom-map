/// <reference types="snapsvg" />
import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class TextSvgComponent implements SvgComponent {
    private text;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: Dimensions;
    fontSize: number;
    constructor(text: string, snapCtx: Snap.Paper, position: Position, dimensions: Dimensions, fontSize?: number);
    draw(): Promise<void>;
}
