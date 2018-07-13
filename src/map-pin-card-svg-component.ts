import Snap = require("snapsvg");
import SvgComponent from "./svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";
import MapPinDetails from "./map-pin-details";

export default class MapPinCardSvgComponent implements SvgComponent {

  constructor(private details: MapPinDetails, public snapCtx: Snap.Paper, public position: Position, public dimensions: RectangleDimensions){}
  groupedElement!: Snap.Paper
  draw() {
    return new Promise<void>( (resolve: ()=> any, reject: ()=> any) => {
      let container = this.snapCtx.rect(this.position.x, this.position.y, this.dimensions.width, this.dimensions.height, 10);
      container.attr({
        fill: 'white',
        stroke: 'black',
        strokeWidth: 1
      });
      let cardWidth: number = this.dimensions.width * 0.95;
      let cardHeight: number = this.dimensions.height * 0.95;
      let foreignObject: string = ` <svg>
                                      <foreignObject width="${cardWidth}" height="${cardHeight}" x="${this.position.x}" y="${this.position.y}">
                                        <p>
                                          <b>${this.details.title}</b>
                                          <br/>
                                          ${this.details.description}
                                        </p>
                                      </foreignObject>
                                    </svg>`;
      let parsedSvg = Snap.parse( foreignObject);
      this.groupedElement = this.snapCtx.group( container, parsedSvg);
      this.hide();
      resolve();
    });
  }

  hide(): void {
    this.groupedElement.attr({
      "visibility": "hidden"
    });
  }

  show(): void {
    this.groupedElement.attr({
      "visibility": "visible"
    });
  }

}
