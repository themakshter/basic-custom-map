import MapCanvasComponent from "./map-canvas-component";
import Position from "./position";
import Dimensions from "./dimensions";

export function createMap (canvasId: string, map: any)  {
  let canvas : HTMLCanvasElement = <HTMLCanvasElement> document.getElementById(canvasId);
  let ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D> canvas.getContext('2d');
  let mapDimensions: Dimensions = { width: canvas.width, height: canvas.height };
  let mapPosition: Position = { x: 0, y: 0 };
  let canvasMap: MapCanvasComponent = new MapCanvasComponent(map.title, map.imageSource, map.pins, ctx, mapPosition, mapDimensions);
  canvasMap.draw().then( () => {
    console.log("finito!");
  });
}
