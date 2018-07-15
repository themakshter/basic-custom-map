import ImageSvgComponent from "./image-svg-component"
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
import CircleSvgComponent from "./circle-svg-component";
import CircleDimensions from "./circle-dimensions";
import MapPinCardSvgComponent from "./map-pin-card-svg-component";
import MapPinDetails from "./map-pin-details";

export default class MapPinSvgComponent implements SvgComponent {

  constructor(private name:string, private description: string, private imageSource: string, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions, private clickCallback: (parameter : any) => void){}

  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let pinImage: ImageSvgComponent = new ImageSvgComponent(this.imageSource, this.snapCtx, this.position, this.dimensions);
      let circleSize = this.dimensions.width * 0.10;
      let circleX: number = this.position.x + this.dimensions.width/2;
      let circleY: number = this.position.y + (this.dimensions.height * 1.10) + circleSize;
      let circlePosition: Position = { x: circleX, y: circleY};
      let circleForPin : CircleSvgComponent = new CircleSvgComponent(this.snapCtx, circlePosition, new CircleDimensions(circleSize));
      let mapPinDetails: MapPinDetails = {title: this.name, description: this.description };
      let mapPinCardDimensions = new RectangleDimensions(this.dimensions.width * 3, this.dimensions.height * 1.5);
      let nameCard: MapPinCardSvgComponent = new MapPinCardSvgComponent(mapPinDetails, this.snapCtx, circlePosition, mapPinCardDimensions);
      pinImage.draw().then( () => {
        circleForPin.draw();
        nameCard.draw();
        circleForPin.element.hover(hoverInHandler => {
          nameCard.show();
        }, hoverOutHandler => {
          nameCard.hide();
        });
        circleForPin.element.click(() => {
          this.clickCallback(this.name);
        });
      });
      resolve();
    });
  }
}
