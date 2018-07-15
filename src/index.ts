import { MapSvgComponent } from "./map-svg-component";
import { Position } from "./position";
import { RectangleDimensions } from "./rectangle-dimensions";

import Snap = require("snapsvg");

export function createMap (svgId: string, map: any)  {
  let snapCtx : Snap.Paper = Snap('#' + svgId);
  let mapDimensions: RectangleDimensions = getSvgDimensions(svgId);
  let mapPosition: Position = { x: 0, y: 0 };
  let canvasMap: MapSvgComponent = new MapSvgComponent(map, snapCtx, mapPosition, mapDimensions);
  canvasMap.draw().then( () => {
    console.log("finito!");
  });
}

function getSvgDimensions(svgElementId: string) : RectangleDimensions{
  let svgElement : SVGSVGElement | any = document.getElementById(svgElementId);
  let mapWidth: number = svgElement.width.baseVal.valueInSpecifiedUnits
  let mapHeight: number = svgElement.height.baseVal.valueInSpecifiedUnits
  return { width: mapWidth, height: mapHeight};
}
