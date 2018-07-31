import Snap = require('snapsvg');
import { ColourAttributes } from './colour-attributes';
import { MapPinDetails } from './map-pin-details';
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
import { SvgComponent } from './svg-component';
import { setColourAttributeForSnapElement } from './utils';

export class MapPinCardSvgComponent implements SvgComponent {
  public groupedElement!: Snap.Paper;

  constructor(private details: MapPinDetails, public snapCtx: Snap.Paper,
              public position: Position, public dimensions: RectangleDimensions) { }
  public draw() {
    return new Promise<void>((resolve: () => any, reject: () => any) => {
      const container = this.getContainerForCard();
      const parsedSvg = this.getForeignObjectForCard();
      this.groupedElement = this.snapCtx.group(container, parsedSvg);
      this.hide();
      resolve();
    });
  }

  public getContainerForCard(): Snap.Fragment {
    const container = this.snapCtx.rect(this.position.x, this.position.y,
                                        this.dimensions.width, this.dimensions.height, 10);
    const containerColourAttributes: ColourAttributes = {
      fillColour: 'white',
      strokeColour: 'black',
      strokeSize: 1,
    };
    setColourAttributeForSnapElement(container, containerColourAttributes);
    return container;
  }

  public getForeignObjectForCard(): Snap.Fragment {
    const objectDimensions: RectangleDimensions = this.getDimensionsForForeignObject();
    const foreignObjectHtml = this.getForeignObjectHtmlForCard(this.details, objectDimensions, this.position);
    return Snap.parse(foreignObjectHtml);
  }

  public getDimensionsForForeignObject(): RectangleDimensions {
    const cardWidth: number = this.dimensions.width * 0.95;
    const cardHeight: number = this.dimensions.height * 0.95;
    return { width: cardWidth, height: cardHeight };
  }

  public getForeignObjectHtmlForCard(details: MapPinDetails,
                                     dimensions: RectangleDimensions, position: Position): string {
    return `
    <svg>
      <foreignObject width="${dimensions.width}" height="${dimensions.height}" x="${position.x}" y="${position.y}">
        <p>
          <b>${details.title}</b>
          <br/>
            ${details.description}
        </p>
      </foreignObject>
    </svg>`;
  }

  public hide(): void {
    this.makeElementVisible(false);
  }

  public show(): void {
    this.makeElementVisible(true);
  }

  public makeElementVisible(visible: boolean) {
    const attributeValue = visible ? 'visible' : 'hidden';
    this.groupedElement.attr({
      visibility: attributeValue,
    });
  }

}
