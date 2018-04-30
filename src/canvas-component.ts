import Position from "./Position";
import Dimensions from "./Dimensions";

export default interface CanvasComponent {
  position: Position;
  dimensions: Dimensions;
  draw(): void;
}
