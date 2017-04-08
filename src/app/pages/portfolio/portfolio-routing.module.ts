import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from "./portfolio.component";
import {AlbumComponent} from "./album/album.component";
import {AnnotationComponent} from "./annotation/annotation.component";

const routes: Routes = [
  {
    path: ':id',
    component: PortfolioComponent,
    children: [{
      path: '', redirectTo: '(album/0//aux:annotation/0)', pathMatch:'full'
    }, {
      path: 'album/:id', component: AlbumComponent
    },{
      path: 'annotation/:id', component: AnnotationComponent, outlet: 'aux'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PortfolioRoutingModule { }

