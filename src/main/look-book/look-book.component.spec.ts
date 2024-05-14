import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookBookComponent } from './look-book.component';

describe('LookBookComponent', () => {
  let component: LookBookComponent;
  let fixture: ComponentFixture<LookBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookBookComponent]
    });
    fixture = TestBed.createComponent(LookBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
