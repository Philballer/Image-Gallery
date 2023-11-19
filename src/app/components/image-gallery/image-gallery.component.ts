import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPicture } from 'src/app/interfaces/IPicture';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent {
  @Input()
  public images: IPicture[] | undefined;

  @Output()
  public imageClicked = new EventEmitter<IPicture>();

  @Output()
  public onDelete = new EventEmitter<string>();

  public onImageDelete(id: string): void {
    this.onDelete.emit(id);
  }
  public onImageClick(image: IPicture): void {
    this.imageClicked.emit(image);
  }
}
