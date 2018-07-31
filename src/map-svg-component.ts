import { ImageSvgComponent } from './image-svg-component';
import { Map } from './map';
import { MapPin } from './map-pin';
import { MapPinSvgComponent } from './map-pin-svg-component';
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
import { SvgComponent } from './svg-component';

export class MapSvgComponent implements SvgComponent {
  private xScale: number;
  private yScale: number;

  constructor(private map: Map, public snapCtx: Snap.Paper,
              public position: Position, public dimensions: RectangleDimensions) {
    this.xScale = this.dimensions.width / this.map.coordinateSpace.width;
    this.yScale = this.dimensions.height / this.map.coordinateSpace.height;
  }

  public draw(): Promise<void> {
    return new Promise<void>( (resolve: () => any, reject: () => any) => {
      const mapImage: ImageSvgComponent = new ImageSvgComponent(this.map.imageSource, this.snapCtx,
                                                              this.position, this.dimensions);
      mapImage.draw().then( () => {
        this.drawMapPins(this.map.pins);
      });
      resolve();
    });
  }

  public drawMapPins(mapPins: MapPin[]): void {
    for (const pin of mapPins) {
      const scaledPinPositon = this.getScaledPosition(pin.position);
      const scaledDimensions = this.getScaledDimensions(pin.dimensions);
      const mapPin = new MapPinSvgComponent(pin, this.snapCtx, scaledPinPositon, scaledDimensions);
      mapPin.draw();
    }
  }

  public getScaledPosition(position: Position): Position {
    const scaledX = position.x * this.xScale;
    const scaledY = position.y * this.yScale;
    return { x: scaledX, y: scaledY };
  }

  public getScaledDimensions(dimensions: RectangleDimensions): RectangleDimensions {
    const scaledWidth = dimensions.width * this.xScale;
    const scaledHeight = dimensions.height * this.yScale;
    return { width: scaledWidth, height: scaledHeight };
  }

}
