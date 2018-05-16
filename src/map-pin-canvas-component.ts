import ImageCanvasComponent from "./image-canvas-component"
import TextCanvasComponent from "./text-canvas-component"
import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";
import Utils from "./utils";

export default class MapPinCanvasComponent implements CanvasComponent {

  constructor(private name:string, private imageSource: string, public ctx: CanvasRenderingContext2D, public position: Position, public dimensions: Dimensions){}

  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let pinImage: ImageCanvasComponent = new ImageCanvasComponent(this.imageSource, this.ctx, this.position, this.dimensions);
      let nameFontSize = this.dimensions.height * 0.25;
      let nameWidth: number = Utils.getTextWidthBasedOnFontSize(this.ctx, this.name, nameFontSize);
      let nameX: number = this.position.x + Utils.getPointForCenteringOnWidth(nameWidth, this.dimensions.width);
      let nameY: number = this.position.y + this.dimensions.height + nameFontSize;
      let namePosition: Position = { x: nameX, y: nameY};
      let imageText: TextCanvasComponent = new TextCanvasComponent(this.name, this.ctx, namePosition, this.dimensions, nameFontSize);
      pinImage.draw().then( () => {
        imageText.draw();
      });
      resolve();
    });
  }
}
