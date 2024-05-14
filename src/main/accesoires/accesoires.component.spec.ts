import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoiresComponent } from './accesoires.component';

describe('AccesoiresComponent', () => {
  let component: AccesoiresComponent;
  let fixture: ComponentFixture<AccesoiresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoiresComponent]
    });
    fixture = TestBed.createComponent(AccesoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
