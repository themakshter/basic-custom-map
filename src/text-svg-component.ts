import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class TextSvgComponent implements SvgComponent{

  constructor(private text: string, public snapCtx: Snap.Paper, public position: Position, public dimensions: Dimensions, public fontSize: number = 10){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      //this.snapCtx.font = this.fontSize + 'px serif';
      this.snapCtx.text(this.position.x, this.position.y, this.text);
      resolve();
    });
  }
}
