import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import {Angular2ImageGalleryModule} from "angular2-image-gallery";
import { AlbumComponent } from './album/album.component';
import { AnnotationComponent } from './annotation/annotation.component';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    Angular2ImageGalleryModule
  ],
  declarations: [PortfolioComponent, AlbumComponent, AnnotationComponent]
})
export class PortfolioModule { }
