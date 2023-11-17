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

  public numbers = [1, 2, 3, 4, 5, 6, 7, 89, 9, 0];

  @Output()
  public onDelete = new EventEmitter<string>();

  public onImageDelete(id: string): void {
    this.onDelete.emit(id);
  }
}
