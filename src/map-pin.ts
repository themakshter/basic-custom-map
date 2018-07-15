import MapComponentToDraw from "./map-component-to-draw";
import RectangleDimensions from "./rectangle-dimensions";
import Position from "./position";

export default interface MapPin extends MapComponentToDraw{
  name: string;
  description: string;
  position: Position;
  dimensions: RectangleDimensions;
  callbackFunction:  (parameter : any) => void;
}
