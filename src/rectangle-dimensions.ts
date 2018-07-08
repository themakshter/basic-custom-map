import Dimensions from "./dimensions";

export default class RectangleDimensions implements Dimensions {
  constructor(public width: number, public height: number){}
  getDimensions(): any  {
    return {
      width: this.width,
      height: this.height
    }
  }
}
