import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AproposComponent } from './apropos/apropos.component';
import { ArticlesComponent } from './articles/articles.component';
import { AccesoiresComponent } from './accesoires/accesoires.component';
import { LookBookComponent } from './look-book/look-book.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main.component';
import { MainRountingModule } from './main-routing.module';
import { SharedModule } from 'src/shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { IvyCarouselModule } from 'angular-responsive-carousel2';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailAccessoireComponent } from './detail-accessoire/detail-accessoire.component';
import { DetailVetementComponent } from './detail-vetement/detail-vetement.component';
import { MatDialogModule } from '@angular/material/dialog'; 







@NgModule({
  declarations: [
    AproposComponent,
    ArticlesComponent,
    AccesoiresComponent,
    LookBookComponent,
    VideoComponent,
    FooterComponent,
    MainComponent,
    BannerComponent,
    DetailAccessoireComponent,
    DetailVetementComponent
  ],
  imports: [
    CommonModule,
    MainRountingModule,
    SharedModule,
    IvyCarouselModule,
    ReactiveFormsModule,  
    MatDialogModule
  ]
})
export class MainModule { }
