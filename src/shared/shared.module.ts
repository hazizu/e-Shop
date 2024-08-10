import { NgModule } from '@angular/core'

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputComponent } from './input/input.component';

import { StybuttonComponent } from './stybutton/stybutton.component';
import { CommandeFormComponent } from './commande-form/commande-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainSearchComponent } from './main-search/main-search.component';
import { ResumeCommandeItemComponent } from './resume-commande-item/resume-commande-item.component';
import { ResumeCommandeComponent } from './resume-commande/resume-commande.component';
import { SearchArticlePipe } from 'src/_pipes/search-article.pipe';




@NgModule({
  declarations: [
    NavBarComponent,
    InputComponent,
  
    CommandeFormComponent,
 
  
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MainSearchComponent,
    ResumeCommandeItemComponent,
    ResumeCommandeComponent,
    StybuttonComponent
    
  
  ],
  exports:[
    NavBarComponent,
    InputComponent,
    StybuttonComponent,
    CommandeFormComponent,
    MainSearchComponent,
    ResumeCommandeItemComponent, 
    ResumeCommandeComponent,
    StybuttonComponent
    
    
  ]
})
export class SharedModule { }
