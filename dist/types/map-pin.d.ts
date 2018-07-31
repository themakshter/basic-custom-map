import { MapComponentToDraw } from './map-component-to-draw';
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
export interface MapPin extends MapComponentToDraw {
    name: string;
    description: string;
    position: Position;
    dimensions: RectangleDimensions;
    callbackFunction: (parameter: any) => void;
}
