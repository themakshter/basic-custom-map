import SvgComponent from "./svg-component";
import Position from "./position";
import CircleDimensions from "./circle-dimensions";
import ColourAttributes from "./colour-attributes";
import Utils from "./utils";

export default class CircleSvgComponent implements SvgComponent{

  constructor(public snapCtx: Snap.Paper, public position: Position, public dimensions: CircleDimensions){}
  element!: Snap.Element

  draw() : Promise<void> {
    return new Promise<void>( (resolve: any) => {
      this.element = this.snapCtx.circle(this.position.x, this.position.y, this.dimensions.radius);

      // TODO: take in a given colour and calculate lighter value based on that
      let circleColourAttributes: ColourAttributes = {
        fillColour : '#d9c88c',
        strokeColour: '#e6dab3',
        strokeSize: 3
      };
      Utils.setColourAttributeForSnapElement(this.element, circleColourAttributes);

      resolve();
    });
  }
}
