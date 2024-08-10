import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-commande-form',
  templateUrl: './commande-form.component.html',
  styleUrls: ['./commande-form.component.scss']
})
export class CommandeFormComponent {
  @Output() valideCmdEmit:EventEmitter<any> = new EventEmitter<any>();

  commandeForm:FormGroup

  constructor(private fb:FormBuilder){
    this.commandeForm = this.fb.group({
      'name':['', Validators.required],
      'phone':['', Validators.required],
      'email':['', Validators.required],
      'description':[''],
    })

  }

  valideCommande(){
    this.valideCmdEmit.emit()

  }

}
