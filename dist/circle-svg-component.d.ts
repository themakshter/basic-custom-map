/// <reference types="snapsvg" />
import { SvgComponent } from "./svg-component";
import { Position } from "./position";
import { CircleDimensions } from "./circle-dimensions";
export declare class CircleSvgComponent implements SvgComponent {
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: CircleDimensions;
    constructor(snapCtx: Snap.Paper, position: Position, dimensions: CircleDimensions);
    element: Snap.Element;
    draw(): Promise<void>;
}
