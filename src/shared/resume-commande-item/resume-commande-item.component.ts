import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-commande-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-commande-item.component.html',
  styleUrl: './resume-commande-item.component.scss'
})
export class ResumeCommandeItemComponent {
  @Input() resumItem:any

}
