import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class ImageCanvasComponent implements CanvasComponent{

  constructor(private imageSource: string, public ctx: CanvasRenderingContext2D, public position: Position, public dimensions: Dimensions){}

  draw() : Promise<void> {
    let imageToDraw: HTMLImageElement = new Image();
    imageToDraw.src = this.imageSource;
    return new Promise<void>( (resolve: any, reject: any) => {
      imageToDraw.onload = () => {
        this.ctx.drawImage(imageToDraw, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
        resolve();
      };
    });

  }
}
