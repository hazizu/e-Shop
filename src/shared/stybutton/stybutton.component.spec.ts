import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StybuttonComponent } from './stybutton.component';

describe('StybuttonComponent', () => {
  let component: StybuttonComponent;
  let fixture: ComponentFixture<StybuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StybuttonComponent]
    });
    fixture = TestBed.createComponent(StybuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
