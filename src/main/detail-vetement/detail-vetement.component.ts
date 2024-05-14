import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommandeFormComponent } from 'src/shared/commande-form/commande-form.component';

@Component({
  selector: 'app-detail-vetement',
  templateUrl: './detail-vetement.component.html',
  styleUrls: ['./detail-vetement.component.scss']
})
export class DetailVetementComponent {
  colorIndex?:number
  sizeIndex?:number
  quantite:number = 1

  detailsImages=[
    {
      path:'./../../assets/img/Slide-1-detail.png'
    },
    {
      path:'./../../assets/img/slide-detail2.png'
    },
    {
      path:'./../../assets/img/slide-detail3.png'
    },
    {
      path:'./../../assets/img/slide_detail4.png'
    },
    {
      path:'./../../assets/img/slide-detail5.png'
    }
  ]

  articlesCouleur=['gray','brown', 'lightblue']
  sizes=['S', 'M', 'L', 'XL']

  constructor(private dialog:MatDialog){

  }

  selectColor(color:string,indexColor:number){
    console.log(indexColor)
    this.colorIndex = indexColor
  }

  selectSize(size:string, sizeIndex:number){
    this.sizeIndex = sizeIndex
  }
  decrement(){
    if(this.quantite > 1){
      this.quantite--
      console.log(this.quantite)
    }

  }
  increment(){
    this.quantite++
    console.log(this.quantite)

  }
  clickToCmd(){
    console.log('clicked')
    this.dialog.open(CommandeFormComponent,{
      width:'20rem'
    })
  }

}
