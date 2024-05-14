import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  contactForm:FormGroup

  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      "name":["", Validators.required],
      "email":["", Validators.required],
      "message":["", Validators.required]
    })
  }

}
