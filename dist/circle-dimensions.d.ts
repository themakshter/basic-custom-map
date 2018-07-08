import Dimensions from "./dimensions";
export default class CircleDimensions implements Dimensions {
    radius: number;
    constructor(radius: number);
    getDimensions(): any;
}
