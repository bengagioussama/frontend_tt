import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouttypeComponent } from './ajouttype.component';

describe('AjouttypeComponent', () => {
  let component: AjouttypeComponent;
  let fixture: ComponentFixture<AjouttypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouttypeComponent]
    });
    fixture = TestBed.createComponent(AjouttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
