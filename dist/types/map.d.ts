import { MapPin } from "./map-pin";
import { MapComponentToDraw } from "./map-component-to-draw";
import { RectangleDimensions } from "./rectangle-dimensions";
export interface Map extends MapComponentToDraw {
    pins: Array<MapPin>;
    coordinateSpace: RectangleDimensions;
}
