import { Component } from '@angular/core';
import { IPicture } from './interfaces/IPicture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public images: IPicture[] = [];

  private imagesBackup: IPicture[] = [];

  public onImageAdd(image: IPicture): void {
    this.images.push(image);
    this.imagesBackup = this.images;
  }

  public onImageDelete(id: string): void {
    this.images = this.images.filter((image) => image.id !== id);
  }

  public onSearch(tag: string): void {
    // tag = tag.toLowerCase();
    console.log(tag);
  }

  public onOpenImage(image: IPicture): void {
    console.log(image);
  }
}
