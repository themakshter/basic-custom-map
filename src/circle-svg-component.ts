import { CircleDimensions } from './circle-dimensions';
import { ColourAttributes } from './colour-attributes';
import { Position } from './position';
import { SvgComponent } from './svg-component';
import { setColourAttributeForSnapElement } from './utils';

export class CircleSvgComponent implements SvgComponent {
  public element!: Snap.Element;
  constructor(public snapCtx: Snap.Paper, public position: Position, public dimensions: CircleDimensions) {}

  public draw(): Promise<void> {
    return new Promise<void>( (resolve: any) => {
      this.element = this.snapCtx.circle(this.position.x, this.position.y, this.dimensions.radius);

      // TODO: take in a given colour and calculate lighter value based on that
      const circleColourAttributes: ColourAttributes = {
        fillColour : '#d9c88c',
        strokeColour: '#e6dab3',
        strokeSize: 3,
      };
      setColourAttributeForSnapElement(this.element, circleColourAttributes);

      resolve();
    });
  }
}
