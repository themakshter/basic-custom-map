/// <reference types="snapsvg" />
import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class MapPinSvgComponent implements SvgComponent {
    private name;
    private imageSource;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: Dimensions;
    constructor(name: string, imageSource: string, snapCtx: Snap.Paper, position: Position, dimensions: Dimensions);
    draw(): Promise<void>;
}
