import { Position } from './position';
import { RectangleDimensions } from './rectangle-dimensions';
import { SvgComponent } from './svg-component';

export class ImageSvgComponent implements SvgComponent {

  constructor(private imageSource: string, public snapCtx: Snap.Paper,
              public position: Position, public dimensions: RectangleDimensions) {}

  public draw(): Promise<void> {
    return new Promise<void>((resolve: any, reject: any) => {
      this.snapCtx.image(this.imageSource, this.position.x, this.position.y,
                          this.dimensions.width, this.dimensions.height);
      resolve();
    });
  }
}
