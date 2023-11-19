import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPicture } from 'src/app/interfaces/IPicture';

@Component({
  selector: 'app-delete-verification',
  templateUrl: './delete-verification.component.html',
  styleUrls: ['./delete-verification.component.css'],
})
export class DeleteVerificationComponent {
  @Input()
  public image: IPicture | undefined;

  public constructor(private activeModal: NgbActiveModal) {}

  public onBtnClick(decision: boolean) {
    this.activeModal.close(decision);
  }
}
