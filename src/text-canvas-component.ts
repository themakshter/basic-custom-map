import CanvasComponent from "./canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class TextCanvasComponent implements CanvasComponent{

  constructor(private text: string, public ctx: CanvasRenderingContext2D, public position: Position, public dimensions: Dimensions){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
    this.ctx.fillText(this.text, this.position.x, this.position.y);
    resolve();
  });
  }
}
