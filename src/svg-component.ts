import Position from "./position";
import Dimensions from "./dimensions";

export default interface SvgComponent {
  snapCtx: Snap.Paper;
  position: Position;
  dimensions: Dimensions;
  draw(): Promise<void>;
}
