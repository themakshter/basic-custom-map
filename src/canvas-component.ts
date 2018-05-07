import Position from "./position";
import Dimensions from "./dimensions";

export default interface CanvasComponent {
  ctx: CanvasRenderingContext2D;
  position: Position;
  dimensions: Dimensions;
  draw(): Promise<void>;
}
