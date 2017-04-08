import { NgModule, ModuleWithProviders }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {BaSidebar} from "./components/baSidebar/baSidebar.component";


@NgModule({
  declarations: [
    BaSidebar
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BaSidebar
  ]
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: AppCommonModule,
      providers: [
      ],
    };
  }
}
