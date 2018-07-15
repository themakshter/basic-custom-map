import Snap = require("snapsvg");
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
import MapPinDetails from "./map-pin-details";
import ColourAttributes from "./colour-attributes";
import Utils from "./utils";

export default class MapPinCardSvgComponent implements SvgComponent {

  constructor(private details: MapPinDetails, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions){}
  groupedElement!: Snap.Paper
  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let container = this.getContainerForCard();
      let parsedSvg = this.getForeignObjectForCard();
      this.groupedElement = this.snapCtx.group( container, parsedSvg);
      this.hide();
      resolve();
    });
  }

  getContainerForCard(): Snap.Fragment {
    let container = this.snapCtx.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height, 10);
    let containerColourAttributes: ColourAttributes = {
      fillColour: 'white',
      strokeColour: 'black',
      strokeSize: 1
    };
    Utils.setColourAttributeForSnapElement(container, containerColourAttributes);
    return container;
  }

  getForeignObjectForCard(): Snap.Fragment {
    let objectDimensions: RectangleDimensions = this.getDimensionsForForeignObject();
    let foreignObjectHtml = this.getForeignObjectHtmlForCard(this.details, objectDimensions, this.position);
    return Snap.parse(foreignObjectHtml);
  }

  getDimensionsForForeignObject(): RectangleDimensions {
    let cardWidth: number = this.dimensions.width * 0.95;
    let cardHeight: number = this.dimensions.height * 0.95;
    return new RectangleDimensions(cardWidth, cardHeight);
  }

  getForeignObjectHtmlForCard(details: MapPinDetails ,dimensions: RectangleDimensions, position: Position): string {
    return ` <svg>
              <foreignObject width="${dimensions.width}" height="${dimensions.height}" x="${position.x}" y="${position.y}">
                <p>
                  <b>${details.title}</b>
                  <br/>
                    ${details.description}
                </p>
              </foreignObject>
            </svg>`;
  }

  hide(): void {
    this.makeElementVisible(false);
  }

  show(): void {
    this.makeElementVisible(true);
  }

  makeElementVisible(visible: boolean){
    let attributeValue = visible ? 'visible' : 'hidden';
    this.groupedElement.attr({
      'visibility': attributeValue
    });
  }

}
