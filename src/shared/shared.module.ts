import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StybuttonComponent } from './stybutton/stybutton.component';
import { CommandeFormComponent } from './commande-form/commande-form.component';




@NgModule({
  declarations: [
    NavBarComponent,
    InputComponent,
    StybuttonComponent,
    CommandeFormComponent,
  
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    NavBarComponent,
    InputComponent,
    StybuttonComponent,
    CommandeFormComponent
   
  ]
})
export class SharedModule { }
