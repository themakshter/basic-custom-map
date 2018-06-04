/// <reference types="snapsvg" />
import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";
export default class ImageSvgComponent implements SvgComponent {
    private imageSource;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: Dimensions;
    constructor(imageSource: string, snapCtx: Snap.Paper, position: Position, dimensions: Dimensions);
    draw(): Promise<void>;
}
