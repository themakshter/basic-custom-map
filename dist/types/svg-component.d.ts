/// <reference types="snapsvg" />
import { CircleDimensions } from './circle-dimensions';
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
export interface SvgComponent {
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions | CircleDimensions;
    draw(): Promise<void>;
}
