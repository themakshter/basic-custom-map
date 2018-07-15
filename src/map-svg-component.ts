import MapPinSvgComponent from "./map-pin-svg-component";
import ImageSvgComponent from "./image-svg-component";
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
import Map from "./map";

export default class MapSvgComponent implements SvgComponent {

  constructor(private map: Map, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let mapImage: ImageSvgComponent = new ImageSvgComponent(this.map.imageSource, this.snapCtx, this.position, this.dimensions);
      mapImage.draw().then( () => {
        this.drawMapPins(this.map.pins);
      });
      resolve();
    });
  }

  drawMapPins(mapPins: Array<any>): void {
    for(let pin of mapPins){
      let pinSize: number = this.dimensions.width * 0.075;
      let pinDimensions: RectangleDimensions = new RectangleDimensions(pinSize, pinSize);
      let mapPin = new MapPinSvgComponent(pin, this.snapCtx, pin.position, pinDimensions);
      mapPin.draw();
    }
  }
}
