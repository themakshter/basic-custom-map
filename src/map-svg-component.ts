import MapPinSvgComponent from "./map-pin-svg-component";
import ImageSvgComponent from "./image-svg-component";
import TextSvgComponent from "./text-svg-component";
import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";
import Utils from "./utils";

export default class MapSvgComponent implements SvgComponent {

  constructor(private title: string, private imageSource: string, private pins: Array<any>, public snapCtx: Snap.Paper, public position: Position, public dimensions: Dimensions){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let mapImage: ImageSvgComponent = new ImageSvgComponent(this.imageSource, this.snapCtx, this.position, this.dimensions);
      let titleFontSize: number = this.dimensions.height * 0.075;
      //let titleTextWidth: number = Utils.getTextWidthBasedOnFontSize(this.snapCtx, this.title, titleFontSize);
      let titleX: number = this.position.x - this.dimensions.width/2;
      let titleY: number = this.position.y + (this.dimensions.height * 0.075);
      let titlePosition: Position = { x: titleX, y: titleY};
      let mapTitle: TextSvgComponent = new TextSvgComponent(this.title, this.snapCtx, titlePosition, this.dimensions, titleFontSize);
      mapImage.draw().then( () => {
        for(let pin of this.pins){
          let pinSize: number = this.dimensions.width * 0.075;
          let pinDimensions: Dimensions = { width: pinSize, height: pinSize};
          let mapPin = new MapPinSvgComponent(pin.name, pin.imageSource, this.snapCtx, pin.position, pinDimensions);
          mapPin.draw();
        }
        mapTitle.draw();
      });
      resolve();
    });
  }
}
