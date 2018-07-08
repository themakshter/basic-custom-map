import MapSvgComponent from "./map-svg-component";
import Position from "./position";
import RectangleDimensions from "./rectangle-dimensions";

import Snap = require("snapsvg");

export function createMap (svgId: string, map: any)  {
  let snapCtx : Snap.Paper = Snap('#' + svgId);
  let svgElement : SVGSVGElement | any = document.getElementById(svgId);
  let mapWidth: number = svgElement.width.baseVal.valueInSpecifiedUnits
  let mapHeight: number = svgElement.height.baseVal.valueInSpecifiedUnits
  let mapDimensions = new RectangleDimensions(mapWidth, mapHeight);
  let mapPosition: Position = { x: 0, y: 0 };
  let canvasMap: MapSvgComponent = new MapSvgComponent(map.title, map.imageSource, map.pins, snapCtx, mapPosition, mapDimensions);
  canvasMap.draw().then( () => {
    console.log("finito!");
  });
}
