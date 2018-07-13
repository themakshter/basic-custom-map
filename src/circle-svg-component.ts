import SvgComponent from "./svg-component";
import Position from "./position";
import CircleDimensions from "./circle-dimensions";

export default class CircleSvgComponent implements SvgComponent{

  constructor(public snapCtx: Snap.Paper, public position: Position, public dimensions: CircleDimensions){}
  element!: Snap.Element
  draw() : Promise<void> {
    return new Promise<void>( (resolve: any) => {
      this.element = this.snapCtx.circle(this.position.x, this.position.y, this.dimensions.radius);

      // TODO: take in a given colour and calculate lighter value based on that
      var colourAttribute: string = '#d9c88c';
      var lighterColourAtribute: string = '#e6dab3';

      this.element.attr({
        fill: colourAttribute,
        stroke: lighterColourAtribute,
        strokeWidth: 3
      });
      resolve();
    });
  }
}
