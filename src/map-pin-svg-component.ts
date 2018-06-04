import ImageSvgComponent from "./image-svg-component"
import TextSvgComponent from "./text-svg-component"
import SvgComponent from "./svg-component";
import Position from "./position";
import Dimensions from "./dimensions";
import Utils from "./utils";

export default class MapPinSvgComponent implements SvgComponent {

  constructor(private name:string, private imageSource: string, public snapCtx: Snap.Paper, public position: Position, public dimensions: Dimensions){}

  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let pinImage: ImageSvgComponent = new ImageSvgComponent(this.imageSource, this.snapCtx, this.position, this.dimensions);
      let nameFontSize = this.dimensions.height * 0.25;
      //let nameWidth: number = Utils.getTextWidthBasedOnFontSize(this.snapCtx, this.name, nameFontSize);
      let nameX: number = this.position.x - this.dimensions.width/2;
      let nameY: number = this.position.y + this.dimensions.height + nameFontSize;
      let namePosition: Position = { x: nameX, y: nameY};
      let imageText: TextSvgComponent = new TextSvgComponent(this.name, this.snapCtx, namePosition, this.dimensions, nameFontSize);
      pinImage.draw().then( () => {
        imageText.draw();
      });
      resolve();
    });
  }
}
