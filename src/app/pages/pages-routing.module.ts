import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component'

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
      { path: 'about', loadChildren: 'app/pages/about/about.module#AboutModule' },
      { path: 'resume', loadChildren: 'app/pages/resume/resume.module#ResumeModule' },
      { path: 'portfolio', loadChildren: 'app/pages/portfolio/portfolio.module#PortfolioModule' },
      { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule { }
