import MapPin from "./map-pin";
import MapComponentToDraw from "./map-component-to-draw";

export default interface Map extends MapComponentToDraw{
  pins: Array<MapPin>;
}
