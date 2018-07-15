/// <reference types="snapsvg" />
import { SvgComponent } from "./svg-component";
import { Position } from "./position";
import { RectangleDimensions } from "./rectangle-dimensions";
import { Map } from "./map";
export declare class MapSvgComponent implements SvgComponent {
    private map;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    constructor(map: Map, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    draw(): Promise<void>;
    drawMapPins(mapPins: Array<any>): void;
}
