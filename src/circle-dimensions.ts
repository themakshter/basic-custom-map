import Dimensions from "./dimensions";

export default class CircleDimensions implements Dimensions {
  constructor(public radius: number){}
  getDimensions(): any  {
    return {
      radius: this.radius
    }
  }
}
