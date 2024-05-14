import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  images = [
    {
      path:'./../../assets/img/rectangle2.png'
    },
    {
      path:'./../../assets/img/rectangle1.png'
    },
    {
      path:'./../../assets/img/rectangle3.png'
    },
    {
      path:'./../../assets/img/rectangle4.png'
    },
  ]

}
