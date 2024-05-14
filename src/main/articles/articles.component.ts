import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  constructor(
    private router : Router
  ){

  }

   listColone1 = [
    {
      id:1,
      image:"./../../assets/img/article1.png",
      name:''
    },
    {
      id:2,
      image:"./../../assets/img/article2.png",
      name:""
    },
    {
      id:3,
      image:"./../../assets/img/article7.png",
      name:""
    }
   ]

   listColone2 = [
    {
      id:4,
      image:"./../../assets/img/article5.png",
      name:""
    },
    {
      id:5,
      image:"./../../assets/img/article6.png",
      name:""
    },
    {
      id:6,
      image:"./../../assets/img/article3.png",
      name:""
    }
   ]

   VoirVetement(vetement:any){
    console.log(vetement)
    this.router.navigate(['/detail-vetement/', vetement.id])

   }

}
