import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isFullNav:boolean = false
  showMainSearch:boolean = false
  showResume:boolean = false


 


  constructor(private el : ElementRef, public router:Router){

  

  }


  scrollToSection(sectionId: string): void {
    const section = this.el.nativeElement.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getClickedNav(nav:string){
    console.log(nav)
    switch(nav){
      case 'vetement':
        this.scrollToSection('article')
        break;
      case 'accessoire':
        this.scrollToSection('accessoire')
        break;

      case 'lookBook':
        this.scrollToSection('look')
    }

  }

  getFullNav(){
    console.log(this.isFullNav)
    if(this.isFullNav){
      this.isFullNav = false
      setTimeout(()=>{
        this.isFullNav = true
      }, 100)

    }else{
      this.isFullNav = true
    }
    
  
  }
  getSearch(){
    if(this.showMainSearch){
      this.showMainSearch = false
      setTimeout(()=>{
        this.showMainSearch = true
      }, 100)
    }else{
      this.showMainSearch = true
    }
   

  }
  getResumeCommande(){
    this.showResume = !this.showResume

  }
  getSeachedLibelle(data:string){
    console.log('data search', data)
    this.showMainSearch = false
    if(data === 'Robes femme' || data === 'Chemise homme' || data === 'Chemise femme'){
      this.scrollToSection('article')
    }else{
      this.scrollToSection('accessoire')
    }
  }
  valideResume(){
    this.showResume = !this.showResume
  }

}
