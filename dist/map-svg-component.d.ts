/// <reference types="snapsvg" />
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
export default class MapSvgComponent implements SvgComponent {
    private title;
    private imageSource;
    private pins;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    constructor(title: string, imageSource: string, pins: Array<any>, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    draw(): Promise<void>;
}
