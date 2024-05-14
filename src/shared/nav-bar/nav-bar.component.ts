import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() clickNav:EventEmitter<any> = new EventEmitter<any>();
  @Input() inFull : boolean = false

  constructor(public router:Router){

  }

navList = [
  {
    libelle:'vetement',
    img:'./../../assets/img/Vetements.svg'
  },
  {
    libelle:'accessoire',
    img:'./../../assets/img/Accessoires.svg'
  },
  {
    libelle:'lookBook',
    img:'./../../assets/img/Collections.svg'
  },
  {
    libelle:'video',
    img:'./../../assets/img/Vetements.svg'

  }
]

getNav(nav:any){
  this.clickNav.emit(nav.libelle)
}
getAccueil(){
  this.router.navigate(['/'])

}
closeFull(){
  this.inFull = false
}

}

