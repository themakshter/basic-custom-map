import Dimensions from "./dimensions";
export default class RectangleDimensions implements Dimensions {
    width: number;
    height: number;
    constructor(width: number, height: number);
    getDimensions(): any;
}
