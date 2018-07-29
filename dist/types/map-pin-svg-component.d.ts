/// <reference types="snapsvg" />
import { SvgComponent } from "./svg-component";
import { Position } from "./position";
import { RectangleDimensions } from "./rectangle-dimensions";
import { CircleSvgComponent } from "./circle-svg-component";
import { CircleDimensions } from "./circle-dimensions";
import { MapPinCardSvgComponent } from "./map-pin-card-svg-component";
import { MapPin } from "./map-pin";
export declare class MapPinSvgComponent implements SvgComponent {
    private mapPin;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    constructor(mapPin: MapPin, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    draw(): Promise<void>;
    getCircleComponentForPin(): CircleSvgComponent;
    getCircleDimensions(pinDimensions: RectangleDimensions): CircleDimensions;
    getCircleRadius(pinDimensions: RectangleDimensions): number;
    getCirclePosition(pinDimensions: RectangleDimensions, pinPosition: Position): Position;
    getMapPinCardComponent(): MapPinCardSvgComponent;
    getMapPinCardDimensions(pinDimensions: RectangleDimensions): RectangleDimensions;
    addBehaviourToShowMapPinCardOnCircleHover(pinCircle: CircleSvgComponent, pinCard: MapPinCardSvgComponent): void;
    addBehaviourToExecuteCallbackOnCircleClick(pinCircle: CircleSvgComponent): void;
}
