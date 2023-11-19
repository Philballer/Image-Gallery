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
    this.images.push(image);
  }

  public onImageDelete(id: string): void {
    console.log(id);
  }

  public onOpenImage(image: IPicture): void {
    console.log(image);
  }
}
