import Snap = require('snapsvg');
import { MapSvgComponent } from './map-svg-component';
import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';

export function createMap(svgId: string, map: any) {
  const snapCtx: Snap.Paper = Snap('#' + svgId);
  const mapDimensions: RectangleDimensions = getSvgDimensions(svgId);
  const mapPosition: Position = { x: 0, y: 0 };
  const canvasMap: MapSvgComponent = new MapSvgComponent(map, snapCtx, mapPosition, mapDimensions);
  canvasMap.draw();
}

function getSvgDimensions(svgElementId: string): RectangleDimensions {
  const svgElement: SVGSVGElement | any = document.getElementById(svgElementId);
  const mapWidth: number = svgElement.width.baseVal.valueInSpecifiedUnits;
  const mapHeight: number = svgElement.height.baseVal.valueInSpecifiedUnits;
  return { width: mapWidth, height: mapHeight };
}
