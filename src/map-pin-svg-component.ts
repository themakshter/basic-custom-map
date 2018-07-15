import { ImageSvgComponent } from "./image-svg-component"
import { SvgComponent } from "./svg-component";
import { Position } from "./position";
import { RectangleDimensions } from "./rectangle-dimensions";
import { CircleSvgComponent } from "./circle-svg-component";
import { CircleDimensions } from "./circle-dimensions";
import { MapPinCardSvgComponent } from "./map-pin-card-svg-component";
import { MapPinDetails } from "./map-pin-details";
import { MapPin } from "./map-pin";

export class MapPinSvgComponent implements SvgComponent {

  constructor(private mapPin: MapPin, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions){}

  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let pinImage: ImageSvgComponent = new ImageSvgComponent(this.mapPin.imageSource, this.snapCtx, this.position, this.dimensions);
      let circleForPin = this.getCircleComponentForPin();
      let nameCard: MapPinCardSvgComponent = this.getMapPinCardComponent();
      pinImage.draw().then( () => {
        circleForPin.draw();
        nameCard.draw();
        this.addBehaviourToShowMapPinCardOnCircleHover(circleForPin, nameCard);
        this.addBehaviourToExecuteCallbackOnCircleClick(circleForPin);
      });
      resolve();
    });
  }

  getCircleComponentForPin(): CircleSvgComponent {
    let circleDimensions = this.getCircleDimensions(this.dimensions);
    let circlePosition = this.getCirclePosition(this.dimensions, this.position);
    return new CircleSvgComponent(this.snapCtx, circlePosition, circleDimensions);
  }

  getCircleDimensions(pinDimensions: RectangleDimensions): CircleDimensions {
    let circleRadius: number = this.getCircleRadius(pinDimensions);
    return { radius: circleRadius};
  }

  getCircleRadius(pinDimensions: RectangleDimensions): number {
    return pinDimensions.width * 0.10;
  }

  getCirclePosition(pinDimensions: RectangleDimensions ,pinPosition: Position): Position {
    let circleRadius = this.getCircleRadius(pinDimensions);
    let circleX: number = pinPosition.x + pinDimensions.width/2;
    let circleY: number = this.position.y + (this.dimensions.height * 1.10) + circleRadius;
    return { x: circleX, y: circleY};
  }

  getMapPinCardComponent(): MapPinCardSvgComponent {
    let mapPinDetails: MapPinDetails = {title: this.mapPin.name, description: this.mapPin.description };
    let mapPinCardDimensions = this.getMapPinCardDimensions(this.dimensions);
    let mapPinCirclePosition = this.getCirclePosition(this.dimensions, this.position);
    return new MapPinCardSvgComponent(mapPinDetails, this.snapCtx, mapPinCirclePosition, mapPinCardDimensions);
  }

  getMapPinCardDimensions(pinDimensions: RectangleDimensions): RectangleDimensions {
    let mapPinCardWidth = pinDimensions.width * 3;
    let mapPinCardHeight = pinDimensions.height * 1.5;
    return { width: mapPinCardWidth, height: mapPinCardHeight };
  }

  addBehaviourToShowMapPinCardOnCircleHover(pinCircle: CircleSvgComponent, pinCard: MapPinCardSvgComponent): void {
    pinCircle.element.hover(hoverInHandler => {
      pinCard.show();
    }, hoverOutHandler => {
      pinCard.hide();
    });
  }

  addBehaviourToExecuteCallbackOnCircleClick(pinCircle: CircleSvgComponent): void {
    pinCircle.element.click(() => {
      this.mapPin.callbackFunction(this.mapPin.name);
    });
  }
}
