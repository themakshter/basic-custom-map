import MapPinCanvasComponent from "./map-pin-canvas-component";
import ImageCanvasComponent from "./image-canvas-component"
import TextCanvasComponent from "./text-canvas-component"
import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";
import Utils from "./utils";

export default class MapCanvasComponent implements CanvasComponent {

  constructor(private title: string, private imageSource: string, private pins: Array<any>, public ctx: CanvasRenderingContext2D, public position: Position, public dimensions: Dimensions){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let mapImage: ImageCanvasComponent = new ImageCanvasComponent(this.imageSource, this.ctx, this.position, this.dimensions);
      let titleFontSize: number = this.dimensions.height * 0.075;
      let titleTextWidth: number = Utils.getTextWidthBasedOnFontSize(this.ctx, this.title, titleFontSize);
      let titleX: number = this.position.x + Utils.getPointForCenteringOnWidth(titleTextWidth, this.dimensions.width);
      let titleY: number = this.position.y + (this.dimensions.height * 0.075);
      let titlePosition: Position = { x: titleX, y: titleY};
      let mapTitle: TextCanvasComponent = new TextCanvasComponent(this.title, this.ctx, titlePosition, this.dimensions, titleFontSize);
      mapImage.draw().then( () => {
        for(let pin of this.pins){
          let pinSize: number = this.dimensions.width * 0.075;
          let pinDimensions: Dimensions = { width: pinSize, height: pinSize};
          let mapPin = new MapPinCanvasComponent(pin.name, pin.imageSource, this.ctx, pin.position, pinDimensions);
          mapPin.draw();
        }
        mapTitle.draw();
      });
      resolve();
    });
  }
}
