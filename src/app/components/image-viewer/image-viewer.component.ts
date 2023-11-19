import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPicture } from 'src/app/interfaces/IPicture';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css'],
})
export class ImageViewerComponent {
  @Input()
  public image: IPicture | undefined;

  public constructor(private activeModal: NgbActiveModal) {}

  public onIconClick() {
    this.activeModal.close();
  }
}
