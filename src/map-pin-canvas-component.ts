import ImageCanvasComponent from "./image-canvas-component"
import TextCanvasComponent from "./text-canvas-component"
import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class MapPinCanvasComponent implements CanvasComponent {

  constructor(private name:string, private imageSource: string, public ctx: CanvasRenderingContext2D, public position: Position, public dimensions: Dimensions){}

  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let pinImage: ImageCanvasComponent = new ImageCanvasComponent(this.imageSource, this.ctx, this.position, this.dimensions);
      let textX: number = this.position.x - this.dimensions.width/2;
      let textY: number = this.position.y + this.dimensions.height + 15;
      let textPosition: Position = { x: textX, y: textY};
      let imageText: TextCanvasComponent = new TextCanvasComponent(this.name, this.ctx, textPosition, this.dimensions);
      pinImage.draw().then( () => {
        imageText.draw();
      });
      resolve();
    });
  }
}
