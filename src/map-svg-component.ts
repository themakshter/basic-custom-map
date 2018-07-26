import { MapPinSvgComponent } from "./map-pin-svg-component";
import { ImageSvgComponent } from "./image-svg-component";
import { SvgComponent } from "./svg-component";
import { Position } from "./position";
import { RectangleDimensions } from "./rectangle-dimensions";
import { Map } from "./map";
import { MapPin } from "./map-pin";

export class MapSvgComponent implements SvgComponent {
  private xScale: number;
  private yScale: number;
  constructor(private map: Map, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions){
    this.xScale = this.dimensions.width / this.map.coordinateSpace.width;
    this.yScale = this.dimensions.height / this.map.coordinateSpace.height;
  }

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let mapImage: ImageSvgComponent = new ImageSvgComponent(this.map.imageSource, this.snapCtx, this.position, this.dimensions);
      mapImage.draw().then( () => {
        this.drawMapPins(this.map.pins);
      });
      resolve();
    });
  }

  drawMapPins(mapPins: Array<MapPin>): void {
    for(let pin of mapPins){
      let scaledPinPositon = this.getScaledPosition(pin.position);
      let scaledDimensions = this.getScaledDimensions(pin.dimensions);
      let mapPin = new MapPinSvgComponent(pin, this.snapCtx, scaledPinPositon, scaledDimensions);
      mapPin.draw();
    }
  }

  getScaledPosition(position: Position): Position {
    let scaledX = position.x * this.xScale;
    let scaledY = position.y * this.yScale;
    return { x: scaledX, y: scaledY };
  }

  getScaledDimensions(dimensions: RectangleDimensions): RectangleDimensions {
    let scaledWidth = dimensions.width * this.xScale;
    let scaledHeight = dimensions.height * this.yScale;
    return { width: scaledWidth, height: scaledHeight };
  }

}
