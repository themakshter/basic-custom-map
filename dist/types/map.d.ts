import { MapComponentToDraw } from './map-component-to-draw';
import { MapPin } from './map-pin';
import { RectangleDimensions } from './rectangle-dimensions';
export interface Map extends MapComponentToDraw {
    pins: MapPin[];
    coordinateSpace: RectangleDimensions;
}
