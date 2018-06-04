/// <reference types="snapsvg" />
import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class MapSvgComponent implements SvgComponent {
    private title;
    private imageSource;
    private pins;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: Dimensions;
    constructor(title: string, imageSource: string, pins: Array<any>, snapCtx: Snap.Paper, position: Position, dimensions: Dimensions);
    draw(): Promise<void>;
}
