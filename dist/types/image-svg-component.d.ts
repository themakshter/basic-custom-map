/// <reference types="snapsvg" />
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
import { SvgComponent } from './svg-component';
export declare class ImageSvgComponent implements SvgComponent {
    private imageSource;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    constructor(imageSource: string, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    draw(): Promise<void>;
}
