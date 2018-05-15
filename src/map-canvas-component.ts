import MapPinCanvasComponent from "./map-pin-canvas-component";
import ImageCanvasComponent from "./image-canvas-component"
import TextCanvasComponent from "./text-canvas-component"
import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class MapCanvasComponent implements CanvasComponent {

  constructor(private title: string, private imageSource: string, private pins: Array<any>, public ctx: CanvasRenderingContext2D, public position: Position, public dimensions: Dimensions){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let mapImage: ImageCanvasComponent = new ImageCanvasComponent(this.imageSource, this.ctx, this.position, this.dimensions);
      let textX: number = this.position.x + (this.dimensions.width * 0.40);
      let textY: number = this.position.y + (this.dimensions.height * 0.075);
      let textPosition: Position = { x: textX, y: textY};
      let mapTitle: TextCanvasComponent = new TextCanvasComponent(this.title, this.ctx, textPosition, this.dimensions);
      mapImage.draw().then( () => {
        mapTitle.draw();
        for(let pin of this.pins){
          let pinSize: number = this.dimensions.width * 0.075;
          let pinDimensions: Dimensions = { width: pinSize, height: pinSize};
          let mapPin = new MapPinCanvasComponent(pin.name, pin.imageSource, this.ctx, pin.position, pinDimensions);
          mapPin.draw();
        }
      });
      resolve();
    });
  }
}
