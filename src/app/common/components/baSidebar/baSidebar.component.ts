import {Component, ElementRef, HostListener} from '@angular/core';


import 'style-loader!./baSidebar.scss';

@Component({
  selector: 'ba-sidebar',
  templateUrl: './baSidebar.html'
})
export class BaSidebar {

  constructor(private _elementRef:ElementRef) {

  }

  public ngOnInit():void {

  }


}
