import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { IPicture } from 'src/app/interfaces/IPicture';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-image-form',
  templateUrl: './add-image-form.component.html',
  styleUrls: ['./add-image-form.component.css'],
})
export class AddImageFormComponent {
  @ViewChild('imgInput', { static: false })
  public imageInputElement: ElementRef | undefined;

  @ViewChild('imageTag', { static: false })
  public imageTagElement: ElementRef | undefined;

  @Input()
  public uploadPending = false;

  @Input()
  public uploadDisabled = true;

  @Output()
  public onFileUpload = new EventEmitter<IPicture>();

  public userTag: string | undefined;

  public errorMsg = false;

  public tagErrorMessage = false;

  public addWindowOpen = false;

  public selectedFile: File | undefined;

  public addWindowClicked(): void {
    this.addWindowOpen = !this.addWindowOpen;
    this.clearMemory();
    this.userTag = undefined;
    setTimeout(() => {
      if (this.addWindowOpen && this.imageInputElement) {
        this.imageInputElement.nativeElement.focus();
      }
    }, 200);
  }

  public fileSelected(event: any): void {
    // clear memory
    this.clearMemory();

    const file = event.target.files[0];
    const fileType = file.type;

    // image validation
    if (fileType.match(/image\/*/)) {
      this.selectedFile = file;
    } else {
      this.errorMsg = true;
    }
    if (this.userTag !== undefined) {
      this.uploadDisabled = false;
    }
  }

  public submit(): void {
    if (
      !this.uploadPending ||
      !this.uploadDisabled ||
      this.tagErrorMessage ||
      this.errorMsg
    ) {
      if (this.selectedFile && this.userTag) {
        this.onFileUpload.emit({
          id: uuid(),
          tag: this.userTag,
          image: this.selectedFile,
        });

        //Empty the elements after upload and clear memory
        if (this.imageInputElement && this.imageTagElement) {
          this.imageInputElement.nativeElement.value = '';
          this.imageTagElement.nativeElement.value = '';
          this.uploadDisabled = true;
          this.clearMemory();
        }
      }
    }
  }

  public onTagEntry(input: string): void {
    this.userTag = input.toString().trim();

    if (input.length > 8) {
      this.tagErrorMessage = true;
    } else {
      this.tagErrorMessage = false;
    }

    if (this.selectedFile) {
      this.uploadDisabled = false;
    }
  }

  private clearMemory(): void {
    this.errorMsg = false;
    this.tagErrorMessage = false;
    this.selectedFile = undefined;
  }
}
