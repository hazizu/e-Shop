import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ResumeCommandeItemComponent } from '../resume-commande-item/resume-commande-item.component';
import { StybuttonComponent } from '../stybutton/stybutton.component';

@Component({
  selector: 'app-resume-commande',
  standalone: true,
  imports: [NgFor, CommonModule, ResumeCommandeItemComponent,StybuttonComponent],
  templateUrl: './resume-commande.component.html',
  styleUrl: './resume-commande.component.scss'
})
export class ResumeCommandeComponent {
  @Output() emitCmdResume: EventEmitter<any> = new EventEmitter<any>()

  resumeList = [
    {
      id:1,
      libelle:'Ensemble chemise et pantalon à ourlet en jeans',
      price:"145€",
      color:"Blue",
      size:"L",
      quantite:1,
      resumeImage:"./../../assets/img/resume-image1.png"
    },
    {
      id:2,
      libelle:'Blouse kaki avec sac de voyage jaune',
      price:"345€",
      color:"kaki (unique)",
      size:"M",
      quantite:2,
      resumeImage:"./../../assets/img/resume-image2.png"
    }
      
  ]

  valideResumecmd(){
    this.emitCmdResume.emit()

  }

}
