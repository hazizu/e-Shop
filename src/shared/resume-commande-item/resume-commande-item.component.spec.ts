import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCommandeItemComponent } from './resume-commande-item.component';

describe('ResumeCommandeItemComponent', () => {
  let component: ResumeCommandeItemComponent;
  let fixture: ComponentFixture<ResumeCommandeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCommandeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeCommandeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
