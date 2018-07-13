/// <reference types="snapsvg" />
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
export default class MapPinSvgComponent implements SvgComponent {
    private name;
    private description;
    private imageSource;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    constructor(name: string, description: string, imageSource: string, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    draw(): Promise<void>;
}
