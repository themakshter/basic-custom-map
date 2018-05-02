import Position from "./position";
import Dimensions from "./dimensions";

export default interface CanvasComponent {
  position: Position;
  dimensions: Dimensions;
  draw(): void;
}
