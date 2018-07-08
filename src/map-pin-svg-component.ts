import ImageSvgComponent from "./image-svg-component"
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
import CircleSvgComponent from "./circle-svg-component";
import CircleDimensions from "./circle-dimensions";

export default class MapPinSvgComponent implements SvgComponent {

  constructor(private name:string, private imageSource: string, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions){}

  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let pinImage: ImageSvgComponent = new ImageSvgComponent(this.imageSource, this.snapCtx, this.position, this.dimensions);
      let circleSize = this.dimensions.width * 0.10;
      let circleX: number = this.position.x + this.dimensions.width/2;
      let circleY: number = this.position.y + (this.dimensions.height * 1.10) + circleSize;
      let circlePosition: Position = { x: circleX, y: circleY};
      let circleForPin : CircleSvgComponent = new CircleSvgComponent(this.snapCtx, circlePosition, new CircleDimensions(circleSize));
      pinImage.draw().then( () => {
        circleForPin.draw();
      });
      resolve();
    });
  }
}
