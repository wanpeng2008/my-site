import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {AppCommonModule} from "../common/common.module";

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppCommonModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
