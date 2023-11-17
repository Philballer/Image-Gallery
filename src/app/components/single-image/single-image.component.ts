import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPicture } from 'src/app/interfaces/IPicture';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css'],
})
export class SingleImageComponent {
  @Input()
  public image: IPicture | undefined;

  @Output()
  public onDelete = new EventEmitter<string>();

  public isHovered = false;

  public testRun(): void {
    console.log('icon clicked');
  }

  public deleteImage(): void {
    if (this.image) {
      this.onDelete.emit(this.image.id);
    }
  }
}
