import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVerificationComponent } from './delete-verification.component';

describe('DeleteVerificationComponent', () => {
  let component: DeleteVerificationComponent;
  let fixture: ComponentFixture<DeleteVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVerificationComponent]
    });
    fixture = TestBed.createComponent(DeleteVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
