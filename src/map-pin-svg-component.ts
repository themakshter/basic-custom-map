import { CircleDimensions } from './circle-dimensions';
import { CircleSvgComponent } from './circle-svg-component';
import { ImageSvgComponent } from './image-svg-component';
import { MapPin } from './map-pin';
import { MapPinCardSvgComponent } from './map-pin-card-svg-component';
import { MapPinDetails } from './map-pin-details';
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
import { SvgComponent } from './svg-component';

export class MapPinSvgComponent implements SvgComponent {

  constructor(private mapPin: MapPin, public snapCtx: Snap.Paper,
              public position: Position, public dimensions: RectangleDimensions) {}

  public draw() {
    return new Promise<void>( (resolve: () => any, reject: () => any) => {
      const pinImage: ImageSvgComponent = new ImageSvgComponent(this.mapPin.imageSource, this.snapCtx,
                                                                this.position, this.dimensions);
      const circleForPin = this.getCircleComponentForPin();
      const nameCard: MapPinCardSvgComponent = this.getMapPinCardComponent();
      pinImage.draw().then( () => {
        circleForPin.draw();
        nameCard.draw();
        this.addBehaviourToShowMapPinCardOnCircleHover(circleForPin, nameCard);
        this.addBehaviourToExecuteCallbackOnCircleClick(circleForPin);
      });
      resolve();
    });
  }

  public getCircleComponentForPin(): CircleSvgComponent {
    const circleDimensions = this.getCircleDimensions(this.dimensions);
    const circlePosition = this.getCirclePosition(this.dimensions, this.position);
    return new CircleSvgComponent(this.snapCtx, circlePosition, circleDimensions);
  }

  public getCircleDimensions(pinDimensions: RectangleDimensions): CircleDimensions {
    const circleRadius: number = this.getCircleRadius(pinDimensions);
    return { radius: circleRadius};
  }

  public getCircleRadius(pinDimensions: RectangleDimensions): number {
    return pinDimensions.width * 0.10;
  }

  public getCirclePosition(pinDimensions: RectangleDimensions , pinPosition: Position): Position {
    const circleRadius = this.getCircleRadius(pinDimensions);
    const circleX: number = pinPosition.x + pinDimensions.width / 2;
    const circleY: number = this.position.y + (this.dimensions.height * 1.10) + circleRadius;
    return { x: circleX, y: circleY};
  }

  public getMapPinCardComponent(): MapPinCardSvgComponent {
    const mapPinDetails: MapPinDetails = {title: this.mapPin.name, description: this.mapPin.description };
    const mapPinCardDimensions = this.getMapPinCardDimensions(this.dimensions);
    const mapPinCirclePosition = this.getCirclePosition(this.dimensions, this.position);
    return new MapPinCardSvgComponent(mapPinDetails, this.snapCtx, mapPinCirclePosition, mapPinCardDimensions);
  }

  public getMapPinCardDimensions(pinDimensions: RectangleDimensions): RectangleDimensions {
    const mapPinCardWidth = pinDimensions.width * 3;
    const mapPinCardHeight = pinDimensions.height * 1.5;
    return { width: mapPinCardWidth, height: mapPinCardHeight };
  }

  public addBehaviourToShowMapPinCardOnCircleHover(pinCircle: CircleSvgComponent,
                                                   pinCard: MapPinCardSvgComponent): void {
    pinCircle.element.hover((hoverInHandler) => {
      pinCard.show();
    }, (hoverOutHandler) => {
      pinCard.hide();
    });
  }

  public addBehaviourToExecuteCallbackOnCircleClick(pinCircle: CircleSvgComponent): void {
    pinCircle.element.click(() => {
      this.mapPin.callbackFunction(this.mapPin);
    });
  }
}
