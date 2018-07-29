/// <reference types="snapsvg" />
import { SvgComponent } from "./svg-component";
import { Position } from "./position";
import { RectangleDimensions } from "./rectangle-dimensions";
import { Map } from "./map";
import { MapPin } from "./map-pin";
export declare class MapSvgComponent implements SvgComponent {
    private map;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    private xScale;
    private yScale;
    constructor(map: Map, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    draw(): Promise<void>;
    drawMapPins(mapPins: Array<MapPin>): void;
    getScaledPosition(position: Position): Position;
    getScaledDimensions(dimensions: RectangleDimensions): RectangleDimensions;
}
