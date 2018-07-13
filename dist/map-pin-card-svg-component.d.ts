/// <reference types="snapsvg" />
import Snap = require("snapsvg");
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
import MapPinDetails from "./map-pin-details";
export default class MapPinCardSvgComponent implements SvgComponent {
    private details;
    snapCtx: Snap.Paper;
    position: Position;
    dimensions: RectangleDimensions;
    constructor(details: MapPinDetails, snapCtx: Snap.Paper, position: Position, dimensions: RectangleDimensions);
    groupedElement: Snap.Paper;
    draw(): Promise<void>;
    hide(): void;
    show(): void;
}
