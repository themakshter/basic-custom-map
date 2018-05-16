export default class Utils {

  static getPointForCenteringOnWidth(widthToUse: number, widthToBaseOn: number): number {
    return (0.5 * widthToBaseOn) - (0.5 * widthToUse);
  }

  static getTextWidthBasedOnFontSize(ctx: CanvasRenderingContext2D, textToMeasure: string, fontSize?: number) : number {
    let defaultFontSize : number = 10;
    fontSize = fontSize || defaultFontSize;
    let stringToAddAfterFontSize = 'px serif';
    ctx.font = fontSize + stringToAddAfterFontSize;
    let textWidth: number  = ctx.measureText(textToMeasure).width;
    ctx.font = defaultFontSize + stringToAddAfterFontSize;
    return textWidth;
  }

}
