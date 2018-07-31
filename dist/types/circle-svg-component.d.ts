/// <reference types="snapsvg" />
import { CircleDimensions } from './circle-dimensions';
import { Position } from './position';
import { SvgComponent } from './svg-component';
export declare class CircleSvgComponent implements SvgComponent {
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: CircleDimensions;
    element: Snap.Element;
    constructor(snapCtx: Snap.Paper, position: Position, dimensions: CircleDimensions);
    draw(): Promise<void>;
}
