import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stybutton',
  templateUrl: './stybutton.component.html',
  styleUrls: ['./stybutton.component.scss']
})
export class StybuttonComponent {
  @Input() label?:string 
  @Output() clicked: EventEmitter<any> = new EventEmitter<any>();


  clickedIn(){
    this.clicked.emit()
  }

}

