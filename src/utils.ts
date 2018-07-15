import ColourAttributes from "./colour-attributes";

export default class Utils {

  static setColourAttributeForSnapElement(snapElement: Snap.Element, colourAttributes: ColourAttributes) : void {
    snapElement.attr({
      fill: colourAttributes.fillColour,
      stroke: colourAttributes.strokeColour,
      strokeWidth: colourAttributes.strokeSize
    });
  }
}
