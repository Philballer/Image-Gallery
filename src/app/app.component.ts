import { Component } from '@angular/core';
import { IPicture } from './interfaces/IPicture';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteVerificationComponent } from './components/delete-verification/delete-verification.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public images: IPicture[] = [];

  public searchIsActive = false;

  public isPending = false;

  private imagesBackup: IPicture[] = [];

  public constructor(private modalService: NgbModal) {}

  public onImageAdd(image: IPicture): void {
    this.isPending = true;
    setTimeout(() => {
      this.images.push(image);
      this.imagesBackup = this.images;
      this.isPending = false;
    }, 1000);
  }

  public async onImageDelete(id: string): Promise<void> {
    const foundImageArray = this.imagesBackup.filter(
      (image) => image.id === id
    );
    const imageToDelete = foundImageArray[0];

    const answer = await this.openModal(imageToDelete);

    if (answer) {
      this.images = this.imagesBackup.filter((image) => image.id !== id);
      this.imagesBackup = this.images;
    }
  }

  public onSearch(tag: string): void {
    this.searchIsActive = true;

    tag = tag.toLowerCase();
    this.images = this.imagesBackup;

    if (tag === 'empty-search') {
      this.searchIsActive = false;
      return;
    }

    this.images = this.images.filter((image) => image.tag.startsWith(tag));
  }

  public onOpenImage(image: IPicture): void {
    this.openViewImageModal(image);
  }

  private async openModal(imageToDelete: IPicture): Promise<boolean> {
    const modalRef = this.modalService.open(DeleteVerificationComponent, {
      size: 'md',
      windowClass: 'centered-modal',
    });

    modalRef.componentInstance.image = imageToDelete;

    return await modalRef.result
      .then((result) => result)
      .catch((error) => {
        return;
      });
  }

  public async openViewImageModal(image: IPicture): Promise<void> {
    const modalRef = this.modalService.open(ImageViewerComponent, {
      size: 'xl',
      windowClass: 'centered-modal',
    });
    modalRef.componentInstance.image = image;
  }
}
