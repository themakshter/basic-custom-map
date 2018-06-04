import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";

export default class ImageSvgComponent implements SvgComponent{

  constructor(private imageSource: string, public snapCtx: Snap.Paper, public position: Position, public dimensions: Dimensions){}

  draw() : Promise<void> {
    return new Promise<void>( (resolve: any, reject: any) => {
      this.snapCtx.image(this.imageSource, this.position.x, this.position.y, this.dimensions.width, this.dimensions.height);
      resolve();
    });
  }
}
