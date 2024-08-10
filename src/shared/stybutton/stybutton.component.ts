import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stybutton',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './stybutton.component.html',
  styleUrls: ['./stybutton.component.scss']
})
export class StybuttonComponent {
  @Input() label?:string 
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();
  @Input() styles:any = {};


  clickedIn(){
    this.clicked.emit()
  }

}

