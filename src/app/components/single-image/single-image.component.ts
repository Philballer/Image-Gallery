import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { readFileAndConvertToReadableImage } from 'src/app/helpers/shared';
import { IPicture } from 'src/app/interfaces/IPicture';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css'],
})
export class SingleImageComponent implements OnChanges {
  @Input()
  public imageMetadata: IPicture | undefined;

  @Output()
  public onDelete = new EventEmitter<string>();

  @Output()
  public onImageClick = new EventEmitter<IPicture>();

  public viewableImageURL: string | undefined;

  public isHovered = false;

  public async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.imageMetadata !== undefined) {
      if (this.imageMetadata) {
        this.viewableImageURL = await readFileAndConvertToReadableImage(
          this.imageMetadata.image
        );
      }
    }
  }

  public deleteImage(): void {
    if (this.imageMetadata) {
      this.onDelete.emit(this.imageMetadata.id);
    }
  }

  public openImage(): void {
    if (this.imageMetadata) {
      this.onImageClick.emit({
        ...this.imageMetadata,
        viewableImageUrl: this.viewableImageURL,
      });
    }
  }
}
