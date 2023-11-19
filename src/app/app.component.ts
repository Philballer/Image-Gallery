import { Component } from '@angular/core';
import { IPicture } from './interfaces/IPicture';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public images: IPicture[] = [];

  public onImageAdd(image: IPicture): void {
    console.log('Image-metadata', image);
    this.images.push(image);
    console.log(this.images);
  }
}
