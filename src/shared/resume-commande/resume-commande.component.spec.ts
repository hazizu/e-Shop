import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCommandeComponent } from './resume-commande.component';

describe('ResumeCommandeComponent', () => {
  let component: ResumeCommandeComponent;
  let fixture: ComponentFixture<ResumeCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
