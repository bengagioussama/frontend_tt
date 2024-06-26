import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfoDialogComponent } from './edit-info-dialog.component';

describe('EditInfoDialogComponent', () => {
  let component: EditInfoDialogComponent;
  let fixture: ComponentFixture<EditInfoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditInfoDialogComponent]
    });
    fixture = TestBed.createComponent(EditInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
