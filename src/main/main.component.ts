import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  isFullNav:boolean = false


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

}
